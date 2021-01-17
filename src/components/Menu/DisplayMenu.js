/*
    Klasa wyświetlająca wszystkie elementy komponentu menu
    
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
import { Component } from 'react';


class DisplayMenu extends Component{
  
  constructor(props){
    super(props);
    this.state= {
        isUrzednik : props.isUrzednik
     }
    }
    render(){
      
    return (
      
      <Container fluid>
        <div className="menu">
        <Router>
               <Navbar isUrzednik={this.props.isUrzednik}/>
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
}

export default DisplayMenu
