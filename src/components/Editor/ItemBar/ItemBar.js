import React, { useState } from 'react'
import { useEffect } from 'react'
import Item from './Item'
import './ItemBar.css'

function ItemBar() {
    const [data, setData] = useState([])

    const loadItems = () => {
        const dataMock = [{name: 'Ławka', img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/park-bench-G9Y7qP7-600.jpg'},
            {name: 'Drzewo', img: 'https://i.pinimg.com/736x/e3/d4/b1/e3d4b11d382ab78f907e6b569a4e0c3a.jpg'},
            {name: 'Ławka', img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/park-bench-G9Y7qP7-600.jpg'},
            {name: 'Drzewo', img: 'https://i.pinimg.com/736x/e3/d4/b1/e3d4b11d382ab78f907e6b569a4e0c3a.jpg'},
            {name: 'Ławka', img: 'https://atlas-content-cdn.pixelsquid.com/stock-images/park-bench-G9Y7qP7-600.jpg'},
        ]

        setData(dataMock)
    }

    useEffect(() => {
        loadItems()
        console.log('hi')
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
