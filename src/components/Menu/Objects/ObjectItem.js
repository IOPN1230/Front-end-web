/*
    Klasa wyświetla obiekty do edycji
 */
import React,{Component} from 'react';
import { Card, Button, ButtonToolbar, Col, Row , Modal, Form, Container} from 'react-bootstrap';
import ImageMapper from 'react-image-mapper';
import ObjectEdit from './ObjectEdit'
import { ActionsObject } from '../../../service/Actions'
import { User } from '../../../service/User'


class ObjectItem extends Component {
    
    constructor(props ){
        super(props);
        
        this.replaceModal = this.replaceModal.bind(this);
        this.savemodal = this.savemodal.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            showModal : false,
            show:false,
            requiredItem : 0,
            objects: [
                {name: '',
                author: '',
                heatSign: 0,
                price : 0,
                influenceRadius : 0,
                image: '',
                date: '',}
            ],
            keys:[],
            name:'',
            image:'',
            influenceRadius:0,
            price: 0,
            heatSign: 0,
        }
        ActionsObject.getList().then((list)=>{
            let objects = []
            let keys =[]
            for (let [key, value] of Object.entries(list)) {
                objects.push(value)
                keys.push(key)
               
            }
            this.setState({objects : objects});
            this.setState({keys:keys})
        });
    }
    
    replaceModal(index){
        this.setState({
            showModal:true,
            requiredItem: index,
            
        })
    }

    savemodal(item, key){
        const requiredItem = this.state.requiredItem;
        let temp = this.state.objects;
        temp[requiredItem] = item; 
        this.setState({ data : temp });
        ActionsObject.setValue(key , item)
    }
    modalClose = () =>this.setState({show: false});
    modalShow = () => this.setState({show: true});
    handleName = (e) => this.setState({name:e.target.value});
    handleImage =(e) => this.setState({image:e.target.value});
    handleRadius =(e)=> this.setState({influenceRadius:e.target.value});
    handlePrice = (e) => this.setState({price:e.target.value});
    handleSign = (e) => this.setState({heatSign:e.target.value});
    
    onSubmit(){
        var today = new Date();
        var date = ('0'+(today.getDate())).slice(-2)+'.'+('0'+(today.getMonth()+1)).slice(-2)+'.'+today.getFullYear();
        if (this.state.heatSign === 0 || this.state.price === 0 
            || this.state.influenceRadius === 0 || this.state.name ==='' || this.state.image ===''){
                alert ('Musisz podać wszystkie dane!')
            }else if( this.state.heatSign < 0 || this.state.price < 0 || this.state.influenceRadius < 0){
                alert ('Nie podawaj liczb ujemnych!')
            }
            else{
                ActionsObject.createAndSetValue({"author":User.getUserData().uid,"date": date,
                 "heatSign": this.state.heatSign, 
                 "image": this.state.image, 
                 "influenceRadius": this.state.heatSign, 
                 "name":this.state.name, 
                 "price": this.state.price})
                alert('Pomyślnie dodano do bazy!')
                this.modalClose()
            }
          
    }
    render(){
       let showModalClose = () => this.setState({showModal : false});
        
        const newdata = this.state.objects.map( (data, index) =>{
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
                        <Col >
                          <ButtonToolbar >
                                <Button variant='primary' onClick={()=>this.replaceModal(index)}> Edytuj </Button>      
                         </ButtonToolbar>
                        </Col>                
                    </Row>   
                </Card.Body>
            </Card>
        )
       
    })
    const requiredItem = this.state.requiredItem;
    let modalData = this.state.objects[requiredItem];
    const keyId = this.state.keys[requiredItem];
    
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
                             kij={keyId}
                             savemodal={this.savemodal}></ObjectEdit>
                <Button  className='mt-2' variant='primary' onClick={this.modalShow}> Dodaj obiekt </Button>  
                <Modal show={this.state.show} onHide={this.modalClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Dodaj nowy obiekt</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Container>
                             <Form>
                                <Form.Group as={Row} controlId="nameAdd">
                                    <Form.Label column sm="5">Nazwa: </Form.Label>
                                        <Col sm="6">
                                            <Form.Control type="name" onChange={(e) => this.handleName(e)}/>
                                        </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="imageAdd">
                                     <Form.Label  column sm="5">Zdjęcie: </Form.Label>
                                     <Col sm="6">
                                        <Form.Control type="url" onChange={(e)=>this.handleImage(e)}/>
                                    </Col>
                                </Form.Group>
                                <Form.Group  as={Row} controlId="signAdd">
                                    <Form.Label column sm="5">Współczynnik ciepła: </Form.Label>
                                    <Col sm="3">
                                         <Form.Control type="number" onChange={(e)=>this.handleSign(e)}/>
                                    </Col>
                                    <Col>
                                        <Form.Text className='mt-2 mr-0' style={{fontSize: 16}}> W / m<sup>2</sup> &times; K</Form.Text>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="priceAdd">
                                    <Form.Label column sm="5">Cena: </Form.Label>
                                    <Col sm="3">
                                        <Form.Control type="number" onChange={(e)=>this.handlePrice(e)}/>
                                    </Col>
                                    <Col>
                                        <Form.Text className='mt-2 mr-0' style={{fontSize: 16}}>PLN</Form.Text>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Row} controlId="priceAdd">
                                     <Form.Label column sm="5"> Promień oddziaływania: </Form.Label>
                                     <Col sm="3">
                                         <Form.Control type="number" onChange={(e)=>this.handleRadius(e)}/>
                                     </Col>
                                     <Col>
                                        <Form.Text className='mt-2 mr-0' style={{fontSize: 16}}>m</Form.Text>
                                     </Col>
                                </Form.Group>

                        </Form>
                        </Container>
                   
                   
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.modalClose}> Zamknij </Button>
                        <Button variant="primary" onClick={this.onSubmit}> Zapisz zmiany</Button>
                    </Modal.Footer>
                </Modal>          
            </div>
            
        </div>
    )
    }
}

export default ObjectItem;
