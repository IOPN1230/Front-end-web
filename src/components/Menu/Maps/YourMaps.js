/*
    Klasa wyświetla mapy danego użytkownika - dostępne tylko dla mieszkańca
 */
import React, {Component} from 'react'
import { Card, Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import {Map, TileLayer} from 'react-leaflet';
import {ActionsMap} from '../../../service/Actions';
import Rating from '@material-ui/lab/Rating'
import { User } from '../../../service/User'
import './../styles/menu.css'

class YourMaps extends Component {
    constructor(props ){
        super(props);
        this.state = {
            data: [],
            keys: []
        }
        ActionsMap.getList().then((list)=>{
            let data= []
            let keys =[]
           
            for (let [key, value] of Object.entries(list)) {
                if (value.author === User.getUserData().uid){
                     data.push(value)
                    keys.push(key)
                }
                //console.log(JSON.stringify(data))
               
            }
            this.setState({data : data});
            this.setState({keys:keys});
            
        });
    }
    countCenter(which){
        
        
        let ar=[]
        for (let x of this.state.data[which].data[0].latlngs){
            ar.push(x)
        }
        let lat= (ar[0].lat+ar[2].lat)/2
        let lng= (ar[0].lng+ar[2].lng)/2
        const latlngs2 =[lat, lng]
        console.log(latlngs2)

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
                                    zoom={15} 
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
                                <Rating name="half-rating" defaultValue={data.rating} name={index}  precision='0.5' size="large" readOnly/>
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
        <div className="yourMaps">
           <h3>Twoje mapy</h3> 
           <div>{newdata}</div>
        </div>
    )
    }
    
}

export default YourMaps
