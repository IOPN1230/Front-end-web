import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as BsIcons from 'react-icons/bs';
import * as IoIcons from 'react-icons/io';

export const NavBarData = [

    {
        title : 'Utwórz Sektor',
        path: '/CreateSections',
        icon: <IoIcons.IoMdCreate/>,
        cName: 'nav-text'
    },
    {
        title : 'Twoje Sektory',
        path: '/Sections',
        icon: <BsIcons.BsMap/>,
        cName: 'nav-text'
    },
    {
        title : 'Mapy Użytkowników',
        path: '/UsersMaps',
        icon: <FaIcons.FaMapMarkerAlt/>,
        cName: 'nav-text'
    },
    {
        title : 'Edytuj obiekty',
        path: '/ObjectItem',
        icon: <FaIcons.FaEdit/>,
        cName: 'nav-text'
    },
    
]

export const NavBarUser = [
    {
        title : 'Twoje mapy',
        path: '/YourMaps',
        icon: <FaIcons.FaMapMarkedAlt/>,
        cName: 'nav-text'
    },
]