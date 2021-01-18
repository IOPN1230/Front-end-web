/*
    Klasa wyświetla mapy użytkowników - dostępne tylko dla urzędnika
 */
import React, {Component} from 'react'
import { Card, Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import {Map, TileLayer} from 'react-leaflet';
//import './styles/menu.css'

class usersMaps extends Component {
    constructor(props ){
        super(props);
        this.state = {
            showModal : false,
            requiredItem : 0,
            data: [{
                id: "1",
                name: "Galeria Łódzka",
                date: "24.09.2017",
                author: "UrzędnikJan",
                rate: 3,
                position: [51.759273529052734,19.460887908935547]
                
            },
            {
                id: "2",
                name: "Kościół Najświętszego Serca Jezusowego",
                date: "23.09.2019",
                author: "UrzędnikJan",
                rate: 2,
                position: [51.7452128,19.4039433]
            },
            {
                id: "3",
                name: "Manufaktura",
                date: "02.09.2017",
                author: "UrzędnikJan",
                rate: 1,
                position: [51.7794645,19.4444571]
            }]
        }
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
                            
                                center={data.position} 
                                zoom={12} 
                                style={mapStyles}
                                scrollWheelZoom={false}>
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
                            <Card.Subtitle className='mb-2'>Ocena: {data.rate} /5 </Card.Subtitle>
                        </Col>
                        <Col>
                          <ButtonToolbar>
                                <Button variant='primary' href="edytor"> Edytuj </Button>     
                         </ButtonToolbar>
                        </Col>                
                    </Row>   
                </Card.Body>
            </Card>
        )
    }) 
        return (
        <div className='usersMaps'>
            <h3>Mapy użytkowników</h3>
            <div>{newdata}</div>
        </div>
    )
   }
   
}

export default usersMaps
