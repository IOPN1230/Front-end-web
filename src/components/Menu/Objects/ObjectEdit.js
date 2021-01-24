/*
    Klasa edytuje dane ObjectItem w postaci modala
 */
import React, { Component } from 'react';
import { Button, Modal, Container, Col, Form, Row } from 'react-bootstrap';
//import {data} from './data/editObjectsData'


class ObjectEdit extends Component {
    constructor(props) {
        super(props);
        this.handleSave = this.handleSave.bind(this);
        this.state = {
            kij: '',
            name: '',
            author: '',
            // heatSign: '',
            price: '',
            // influenceRadius : '',
            image: '',
            date: '',
            emission: '',
            heatConducton: '',
            heatDecline: ''
        }
    }
    componentWillReceiveProps(nextP) {
        this.setState({
            kij: nextP.kij,
            name: nextP.name,
            author: nextP.author,
            // heatSign : nextP.heatSign,
            price: nextP.price,
            // influenceRadius : nextP.influenceRadius,
            image: nextP.image,
            date: nextP.date,
            emission: nextP.emission,
            heatConducton: nextP.heatConducton,
            heatDecline: nextP.heatDecline
        });
    }

    // heatSignHandler(e)  {
    //     this.setState({heatSign: e.target.value});
    // }

    priceHandler(e) {
        this.setState({ price: e.target.value });
    }

    // influenceRadiusHandler(e) {
    //     this.setState({influenceRadius : e.target.value})
    // }
    handleSave() {
        const item = this.state;
        this.props.savemodal(item, this.props.kij)
        alert('Obiekt zaktualizowany.')
    };

    heatDeclineHandler(e) {
        this.setState({ heatDecline: e.target.value });
    }
    heatConductonHandler(e) {
        this.setState({ heatConducton: e.target.value });
    }
    emissionHandler(e) {
        this.setState({ emission: e.target.value });
    }

    render() {
        return (

            <Modal show={this.props.show} onHide={this.props.onHide} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Edytuj obiekt
                                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Form>
                            <Form.Group as={Row} controlId="formHeatSign">
                                <Form.Label column sm="8">
                                    HeatConducton
                                            </Form.Label>
                                <Col sm="2">
                                    <Form.Control type="heatsign" defaultValue={this.props.heatConducton} onChange={(e) => this.heatConductonHandler(e)} />
                                </Col>
                                {/* <Col>
                                    <Form.Text className='mt-2 mr-0' style={{ fontSize: 16 }}>??</Form.Text>
                                </Col> */}
                            </Form.Group>

                            <Form.Group as={Row} controlId="formPrice">
                                <Form.Label column sm="8">
                                    Cena
                                            </Form.Label>
                                <Col sm="2">
                                    <Form.Control className='ml-0' type="price" defaultValue={this.props.price} onChange={(e) => this.priceHandler(e)} />
                                </Col>
                                <Col>
                                    <Form.Text className='mt-2 mr-0' style={{ fontSize: 16 }}>PLN</Form.Text>
                                </Col>
                            </Form.Group>

                            <Form.Group as={Row} controlId="formInfluenceRadius">
                                <Form.Label column sm="8">
                                    Heat Decline
                                            </Form.Label>
                                <Col sm="2">
                                    <Form.Control type="influenceRadius" defaultValue={this.props.heatDecline} onChange={(e) => this.heatDeclineHandler(e)} />
                                </Col>
                                {/* <Col>
                                    <Form.Text className='mt-2 mr-0' style={{ fontSize: 16 }}>m</Form.Text>
                                </Col> */}
                            </Form.Group>

                            <Form.Group as={Row} controlId="formInfluenceRadius">
                                <Form.Label column sm="8">
                                    Emission
                                            </Form.Label>
                                <Col sm="2">
                                    <Form.Control type="influenceRadius" defaultValue={this.props.emission} onChange={(e) => this.emissionHandler(e)} />
                                </Col>
                                {/* <Col>
                                    <Form.Text className='mt-2 mr-0' style={{ fontSize: 16 }}>m</Form.Text>
                                </Col> */}
                            </Form.Group>
                        </Form>
                    </Container>

                </Modal.Body>
                <Modal.Footer>
                    <Button style={{ background: ' rgb(21, 9, 53)', border: ' rgb(21, 9, 53)' }} onClick={() => { this.handleSave() }}> Zapisz </Button>
                    <Button onClick={this.props.onHide}>Zamknij</Button>

                </Modal.Footer>
            </Modal>

        )
    }

}
export default ObjectEdit;
