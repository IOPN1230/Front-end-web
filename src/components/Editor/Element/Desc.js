import React from 'react'
import './Element.css'
function Desc(text) {         //wyswietl opis przycisku 
    return (
        <div className="Desc">
            {text}
        </div>
    )
}

export default Desc