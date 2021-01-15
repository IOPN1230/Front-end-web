import React, { useState } from 'react'
import Desc from './Desc'
import { GiFruitTree } from "react-icons/gi";



function ExampleClicked(){
    console.log("wybrano obiekt");
}
function Example() {


    const [isHover, setHover] = useState(false)
    return (
        <div>
            <button
                type="button"
                className="btn btn-primary"
                onClick={() => ExampleClicked}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && Desc('współczynnik ciepła:1.02W/m^2*K cena:150 pln  promień oddziaływania:7m')}
                <GiFruitTree
                    className='icon'
                />
            </button>

        </div>
    )
}

export default Example