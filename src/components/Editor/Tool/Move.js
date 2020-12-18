import React, { useState } from 'react'
import showDesc from './ShowDesc'
import OpenWithOutlinedIcon from '@material-ui/icons/OpenWithOutlined';
function Move() {

    const [isHover, setHover] = useState(false)

    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Przesuń zaznaczony obiekt')}
                <OpenWithOutlinedIcon
                    className='icon'
                />
            </button>
        </div>
    )
}

export default Move
