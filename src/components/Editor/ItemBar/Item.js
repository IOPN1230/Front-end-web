import React from 'react'

function Item({item}) {

    return (
        <div className="Item">
            <img src={item.img} alt={item.name}/>
        </div>
    )
}

export default Item
