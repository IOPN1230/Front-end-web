/*
    Klasa utwórz sektor - w budowie
 */
import React,{ useState, useRef} from 'react'
import { ActionsSection } from '../../../service/Actions'
import { User } from '../../../service/User'
import './../styles/MAP.css'
import { Map, TileLayer, FeatureGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw';
import 'leaflet-draw/dist/leaflet.draw.css'
import {EditControl} from 'react-leaflet-draw';
import {Button, Modal, Form, Container} from 'react-bootstrap';
import './../styles/menu.css'

const  CreateSections = () => {
    
    const [mapLayers, setMapLayers] = useState([]);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [name, setName] = useState('');
    const handleName = (e) => setName(e.target.value)
    
    const _onCreate = (e) =>{
        console.log(e);
        
        const {layerType, layer} = e
 
        if( layerType === 'polygon'){
            const {_leaflet_id} = layer;
        if(mapLayers.length === 0){
             setMapLayers((layers) =>[
            ...layers,
            {id: _leaflet_id, latlngs: layer.getLatLngs()[0]}
             ])
        }else {
            alert('Mozna zrobić tylko jeden sektor na raz!')
        }
       
        }

    }
    const _onEdited = (e) =>{
        console.log(e);
        const{ layers: {_layers}} = e
        Object.values(_layers).map(({_leaflet_id, editing}) => {
            setMapLayers((layers) => 
            layers.map((l) => l.id === _leaflet_id ? {...l, latlngs: {...editing.latlngs[0]}} : l))
        })
    }
    const _onDeleted = (e) =>{
        console.log(e);
        const{ layers: {_layers}} = e
        Object.values(_layers).map(({_leaflet_id}) =>{
            setMapLayers((layers) => layers.filter((l) => l.id !== _leaflet_id))
        })
    }
    const onSubmit = (sectorData) => {
        console.log('onsubmit: ' + JSON.stringify(sectorData))
        var today = new Date();
        var date = ('0'+(today.getDate())).slice(-2)+'.'+('0'+(today.getMonth()+1)).slice(-2)+'.'+today.getFullYear();
        if(sectorData.length){
             ActionsSection.createAndSetValue({"author":User.getUserData().uid,"date": date, "name": name, "data":sectorData})
             alert('Sektor utworzony.')
             window.location = ('/Sections');
        }else{
            alert('Zaznacz obszar sektora!')
        }
       
        
        handleClose()
    }
    return (
        <Container fluid>
        <div id='mapContainer'>
            <Map
                center={[51.778285, 19.449863]} 
                zoom={12} 
                style={{ width: '100%', height: '100%'}}
                ref={useRef()}>
               
                <FeatureGroup>
                    <EditControl 
                        position="topleft" 
                        onCreated={_onCreate} 
                        onEdited={_onEdited} 
                        onDeleted={_onDeleted}
                        draw={{
                            rectangle:false,
                            polyline:false, 
                            circle:false,
                            circlemarker:false,
                            marker:false,
                        }} >

                    </EditControl>
                </FeatureGroup>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
            </Map>
            
           <div className='buttons'> 
               <Button variant="primary"  type='submit' onClick={handleShow}>Utwórz Sektor</Button>
            </div>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Wpisz nazwę sektora</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="SectorName">
                        <Form.Label>Nazwa</Form.Label>
                        <Form.Control type="name" onChange={ (e) => handleName(e) }/>
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                     Zamknij
                    </Button>
                    <Button variant="primary" onClick={()=>onSubmit(mapLayers)}>
                     Zapisz
                    </Button>
                </Modal.Footer>
            </Modal>
            
            </div>
            </Container>
        
        
    )
    
}

export default CreateSections
