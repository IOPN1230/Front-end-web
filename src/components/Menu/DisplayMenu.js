/*
    Klasa wyświetlająca wszystkie elementy komponentu menu
    
    WYMAGANA INSTALACJA: 
      - BOOTSTRAP
      - REACT-ROUTER-DOM
      - IMAGE-MAPPER
      - REACT-LEAFLET
      
 */
import React from 'react'
import './styles/menu.css';
import {Container} from "react-bootstrap";
import ObjectItem from './ObjectItem';
import Sections from './Sections';
import UsersMaps from './UsersMaps';
import Navbar from './Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import CreateSections from './CreateSections';
import YourMaps from './YourMaps';

function DisplayMenu() {
    return (
      <Container fluid>
        <div className="menu">
        <Router>
               <Navbar isUrzednik={true}/>
          <Switch >
              <Route path='/' exact component={CreateSections}/>
              <Route path='/CreateSections' component={CreateSections}/>
              <Route path='/Sections' component={Sections}/>
              <Route path='/UsersMaps' component={UsersMaps}/>
              <Route path='/ObjectItem' component={ObjectItem}/> 
              <Route path='/YourMaps' component={YourMaps}/>
          </Switch>
        </Router>  
        </div>
      </Container>
    )
}

export default DisplayMenu
