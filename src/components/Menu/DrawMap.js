import React, {useRef, useState} from 'react'
import './styles/MAP.css'
import { Map, TileLayer, FeatureGroup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw';
import 'leaflet-draw/dist/leaflet.draw.css'
import {EditControl} from 'react-leaflet-draw';
//import { circle } from 'leaflet';

const MAP = () => {
    const [mapLayers, setMapLayers] = useState([]);
    const _onCreate = (e) =>{
        console.log(e);
        const {layerType, layer} = e
 
        if( layerType === 'polygon'){
            const {_leaflet_id} = layer;
        
        setMapLayers((layers) =>[
            ...layers,
            {id: _leaflet_id, latlngs: layer.getLatLngs()[0]}
        ])
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
    return (
        <div id='mapContainer'>
            <Map
                center={[51.778285, 19.449863]} 
                zoom={12} 
                style={{ width: '80%', height: '80%'}}
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
            <pre>{JSON.stringify(mapLayers, 0, 2)}</pre>
        </div>
    )
}

export default MAP
