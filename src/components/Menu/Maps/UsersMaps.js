/*
    Klasa wyświetla mapy użytkowników - dostępne tylko dla urzędnika
 */
import React, {Component} from 'react'
import { Card, Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
import {Map, TileLayer} from 'react-leaflet';
import {ActionsMap} from '../../../service/Actions';
import Rating from '@material-ui/lab/Rating'
import { keys } from '@material-ui/core/styles/createBreakpoints';
import { withCookies, Cookies } from 'react-cookie';
import { instanceOf } from 'prop-types';

import './../styles/menu.css'

class usersMaps extends Component {
    static propTypes = {
        cookies: instanceOf(Cookies).isRequired
    };

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
                data.push(value)
                keys.push(key)
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
        //console.log(latlngs2)

        return latlngs2
       
    }

    addRating(data, value, index) {
        this.state.data[index].rating = value;
        ActionsMap.setValue(this.state.keys[index] ,this.state.data[index]);
        window.location.reload()
    }

    selectMap(currentMap) {
        console.log(currentMap)
        const { cookies } = this.props;
        cookies.set('currentMapEdit', currentMap, { path: '/' });
        document.location.href = "/Edytor";
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
                            <Rating name="half-rating" defaultValue={data.rating}  precision={0.5} name={index} size="large" 
                                onClick = {(e) => this.addRating(data, e.target.value, index)}
                            />
                        </Col>
                        <Col>
                          <ButtonToolbar>
                                <Button variant='primary' onClick={() => this.selectMap(data)}> Pokaż </Button>     
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

export default withCookies(usersMaps)