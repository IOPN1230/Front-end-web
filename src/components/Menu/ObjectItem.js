/*
    Klasa wyświetla obiekty do edycji
 */
import React,{Component} from 'react';
import { Card, Button, ButtonToolbar, Col, Row } from 'react-bootstrap';
//import {data} from './data/editObjectsData';
import ImageMapper from 'react-image-mapper';
import ObjectEdit from './ObjectEdit'


class ObjectItem extends Component {
    constructor(props ){
        super(props);
        
        this.replaceModal = this.replaceModal.bind(this);
        this.savemodal = this.savemodal.bind(this);
        this.state = {
            showModal : false,
            requiredItem : 0,
            data: [{
                name: "Ławka",
                date: "24.09.2017",
                author: "Janek",
                price: 150,
                heatSign: 1.02,
                influenceRadius: 7,
                image:"https://atlas-content-cdn.pixelsquid.com/stock-images/park-bench-G9Y7qP7-600.jpg"
            },
            {
                name: "Drzewo",
                date: "23.09.2019",
                author: "Janek",
                price: 180,
                heatSign: 1.02,
                influenceRadius : 79,
                image: "https://i.pinimg.com/736x/e3/d4/b1/e3d4b11d382ab78f907e6b569a4e0c3a.jpg"
            },
            {
                name: "Lampa",
                date: "02.09.2017",
                author: "Janek",
                price: 250,
                heatSign: 1.32,
                influenceRadius: 43,
                image: "https://www.freepnglogos.com/uploads/street-light-png/electrical-street-light-pole-street-lighting-pole-20.png"
            }]
        }
    }

    replaceModal(index){
        this.setState({
            showModal:true,
            requiredItem: index,
            
        })
    }

    savemodal(item){
        const requiredItem = this.state.requiredItem;
        let temp = this.state.data;
        temp[requiredItem] = item;
        this.setState({ data : temp });
    }

    render(){
       let showModalClose = () => this.setState({showModal : false});
      
        const newdata = this.state.data.map( (data, index) =>{
        return(
            <Card style={{ width: '65rem' }} key={index} className="p-3" text="dark"> 
                <Card.Body>
                    <Row>
                        <Col xs='2'>
                        <ImageMapper width={100} height={100} src={data.image}/>
                        </Col>
                        <Col xs='3'>
                            <Card.Title className='mb-6' style={{fontSize: 26}}>{data.name}</Card.Title>
                            <Card.Subtitle className='mb-2' style={{fontSize: 10}}>Data utworzenia:  {data.date}</Card.Subtitle>
                            <Card.Subtitle className='mb-2' style={{fontSize: 10}}>Autor: {data.author}</Card.Subtitle> 
                        </Col>
                        <Col xs='4' >
                            <Card.Subtitle className='mb-2'>Współczynnik ciepła: {data.heatSign} W / m <sup>2</sup> &times; K </Card.Subtitle>
                            <Card.Subtitle className='mb-2'>Cena: {data.price} PLN</Card.Subtitle>
                            <Card.Subtitle className='mb-2'>Promień oddziaływania: {data.influenceRadius} m</Card.Subtitle>
                        </Col>
                        <Col>
                          <ButtonToolbar>
                                <Button variant='primary' onClick={()=>this.replaceModal(index)}> Edytuj </Button>      
                         </ButtonToolbar>
                        </Col>                
                    </Row>   
                </Card.Body>
            </Card>
        )
       
    })
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.data[requiredItem]; 
    return (
        <div className='editObjects'>
            <h3> Przeglądaj Obiekty</h3>
            <div>
                 <div >{newdata}</div>
                 <ObjectEdit  show = {this.state.showModal} onHide = {showModalClose} 
                             heatSign={modalData.heatSign} 
                             price={modalData.price} 
                             influenceRadius={modalData.influenceRadius} 
                             image={modalData.image} 
                             name={modalData.name} 
                             author={modalData.author} 
                             date={modalData.date} 
                             savemodal={this.savemodal}></ObjectEdit>
            </div>
            
        </div>
    )
    }
}

export default ObjectItem;