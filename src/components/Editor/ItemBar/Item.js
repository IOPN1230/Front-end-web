import React, { useState, useEffect } from 'react'
import { useCookies } from 'react-cookie';

function Item({item}) {
    const [cookies, setCookie] = useCookies();
    const [active, setActive] = useState()

    const selectObject = () => {
        setCookie('selectedObject', item)
        setActive('true')
    }

    return (
        <div className="Item">
            <img src={item.image} alt={item.name} onClick={() => selectObject()} className={cookies.selectedObject.name === item.name ? 'active' : null}/>
        </div>
    )
}

export default Item
