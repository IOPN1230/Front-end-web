/*
    Klasa wyświetlająca navbar urzędnika lub mieszkańca (zależne od isUrzednik) z pliku navbarData.js
 */
import React from 'react';
import  {Link} from 'react-router-dom';
import {Nav, Navbar, Button} from 'react-bootstrap'
import './styles/menu.css'
import {AuthorizationSystem} from '../../service/AuthorizationSystem'

export default function NavBar(props) {

    const handleSignOut = () => {
        AuthorizationSystem.doSigningOut().then(state => {
            if (state) {
                    props.onSignOut()
            }
        })
    }

    return (
        <>
            {props.isUrzednik ?
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
                        <Button variant='primary' className="mr-sm-2" onClick={handleSignOut}>Wyloguj się</Button>
                        
                
                </Navbar> :
                <Navbar className='color-nav' variant="dark">
                <Navbar.Brand href="/">BaUHinia</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to='/YourMaps'>
                        <Nav.Link href="/YourMaps">Moje mapy</Nav.Link>
                    </Link>
                    <Link to='/AllSections'>
                        <Nav.Link href='/AllSections'>Nowe mapy</Nav.Link>
                    </Link>
                
                    </Nav>
                        <Button variant='primary' className="mr-sm-2" onClick={handleSignOut}>Wyloguj się</Button>
                    </Navbar>

            }
        </>
    )
}



