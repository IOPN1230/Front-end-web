/*
    Klasa wyświetlająca navbar urzędnika lub mieszkańca (zależne od isUrzednik) z pliku navbarData.js
 */
import React from 'react';
import  {Link} from 'react-router-dom';
import { Component } from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap'
import './styles/menu.css'

class NavBar2 extends Component {
    constructor(props){
        super(props);
        this.state= {
            isUrzednik : props.isUrzednik
        }
    }
    render(){
   

    return (
        <>{this.state.isUrzednik ?
             <Navbar className='color-nav' variant="dark" fixed='top'>
                <Navbar.Brand href="/">BaUHinia</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to='/CreateSections'>
                        <Nav.Link href="/CreateSections">Utwórz sektor</Nav.Link>
                    </Link>
                    <Link to='/Sections'> 
                        <Nav.Link href="/Sections">Twoje sektory</Nav.Link>
                   </Link>
                   <Link to='/UsersMaps'>
                       <Nav.Link href='/UsersMaps'>Mapy użytkowników</Nav.Link>
                   </Link>
                    <Link to='/ObjectItem'>
                        <Nav.Link href="/ObjectItem"> Edytuj obiekty</Nav.Link>
                    </Link>
                    </Nav>
                    <Button variant='primary' className="mr-sm-2" >Wyloguj się</Button>
                    
            
            </Navbar> :
            <Navbar className='color-nav' variant="dark">
            <Navbar.Brand href="/">BaUHinia</Navbar.Brand>
            <Nav className="mr-auto">
                <Link to='/YourMaps'>
                    <Nav.Link href="/YourMaps">Moje mapy</Nav.Link>
                </Link>
                <Button variant='primary' className="mr-sm-2" >Wyloguj się</Button>
                </Nav>
                </Navbar>

        }
         
        
        </>
    )
                }
}

export default NavBar2
