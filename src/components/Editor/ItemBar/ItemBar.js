import React, { useState } from 'react'
import { useEffect } from 'react'
import { ActionsObject } from '../../../service/Actions'
import Item from './Item'
import './ItemBar.css'

function ItemBar() {
    const [data, setData] = useState([])

    useEffect(() => {
        ActionsObject.getList().then(objects => 
            setData(Object.values(objects))
        )
    }, [])

    return (
        <div className="ItemBar">
            {data.map(item => (
                <Item item={item}/>
            ))}
        </div>
    )
}

export default ItemBar
