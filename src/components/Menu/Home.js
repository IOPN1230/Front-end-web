/*
    Klasa wyświetlająca wszystkie elementy komponentu menu
    
 */
import React from 'react'
import './styles/menu.css';
import {Container} from "react-bootstrap";
import { Component } from 'react';
import logo from './../LoginScreen/images/logo192.png'


class Home extends Component{
    
    /*splitName(){

      let name=User.getUserData().displayName
      if(!name){
        name='Użytkowniku'
      }
      const word = name.split(' ')
      return word[0]
    }*/

    render(){
      
    return (
      <>
      <Container fluid className='home'>
        <h1>Witaj!</h1>
        <img src={logo} alt="BauHlina" class="logo"/>
      
      </Container>
      
      </>
    )
    }
}

export default Home
