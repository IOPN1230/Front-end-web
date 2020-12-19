/*
    Klasa wyświetlająca navbar urzędnika lub mieszkańca (zależne od isUrzednik) z pliku navbarData.js
 */
import React from 'react';
import  {Link} from 'react-router-dom';
import {NavBarData, NavBarUser} from './data/navbarData';
import './styles/navbar.css';
import {IconContext} from 'react-icons'
import { Component } from 'react';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.state= {
            isUrzednik : props.isUrzednik
        }
    }
    render(){
    
    var Data=NavBarUser
    if (this.props.isUrzednik){
        Data=NavBarData;
    }
   
    

    return (
        <>
        <IconContext.Provider value={{color: 'white'}}>
            
            <nav className='nav-menu'>
                <ul className='nav-menu-items' >
                    {Data.map((item, index)=> {
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>

            </nav>
            </IconContext.Provider>
        </>
    )
                }
}

export default NavBar
