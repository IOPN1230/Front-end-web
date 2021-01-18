/*
    Klasa wyświetla sektory urzędnika 
 */
import React, {Component} from 'react'
//import { Map, GoogleApiWrapper } from 'google-maps-react';
import { Card, Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import {Map, TileLayer} from 'react-leaflet';
import {ActionsSection} from './../../service/Actions'
import './styles/menu.css'
import Rating from '@material-ui/lab/Rating'

class  Sections extends Component {
    constructor(props ){
        super(props);
        this.state = {
            showModal : false,
            requiredItem : 0,
            data: [
            
                  
            ],
            keys:[]
        }
        ActionsSection.getList().then((list)=>{
            let data= []
            let keys =[]
           
            for (let [key, value] of Object.entries(list)) {
                data.push(value)
                keys.push(key)
                //console.log(JSON.stringify(data))
               
            }
            this.setState({data : data});
            this.setState({keys:keys});
       
            //console.log('data w sections: '+ JSON.stringify(data[0].data[0].latlngs[2].lat))
            
        });
    }
    countCenter(which){
        
        const lat2 = this.state.data[which].data[0].latlngs[0].lat;
        //console.log('lat2: '+ which + ' '+ lat2)
        //const lat1 = this.state.data[which].data[0].latlngs[0].lat ;
        //console.log('lat1: '+ lat1)
      
        //let lng1 = this.state.data[which].data[0].latlngs[0].lng ;
       // console.log('lng1: '+ lng1)
        let lng2 = this.state.data[which].data[0].latlngs[0].lng;
        //console.log('lng2: '+ lng2)
        const latlngs2 =[lat2, lng2]
        return latlngs2
       
    }

    render(){
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        
        const newdata = this.state.data.map( (data, index) =>{
        return(
            <Card style={{ width: '65rem' ,height: '15rem'}} key={index} className="p-3" text="dark"> 
                <Card.Body>
                    <Row style={{height:'100%'}}>
                        <Col xs='3'>
                            <Map
                                center={this.countCenter(index)}
                                zoom={14} 
                                style={mapStyles}
                                scrollWheelZoom={true}>
                                <TileLayer
                                     attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                                
                            </Map>
                        </Col>
                        <Col xs='3'>
                            <Card.Title className='mb-6' style={{fontSize: 26}}>{data.name}</Card.Title>
                            <Card.Subtitle className='mb-2' style={{fontSize: 10}}>Data utworzenia:  {data.date}</Card.Subtitle>
                            <Card.Subtitle className='mb-2' style={{fontSize: 10}}>Autor: {data.author}</Card.Subtitle> 
                        </Col>
                        <Col xs='4' >
                            <Rating name="half-rating" defaultValue={data.rating}  size="large" readOnly/>
                        </Col>
                        <Col>
                          <ButtonToolbar>
                                <Button variant='primary'> Edytuj </Button>      
                         </ButtonToolbar>
                        </Col>                
                    </Row>   
                </Card.Body>
            </Card>
        )
    }) 
        return (
        <div className='sections'>
            <h3>Przeglądaj sektory</h3>
            <div> {newdata}</div>
        </div>
    )    
        }

   
}

export default Sections
