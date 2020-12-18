import React, { useState } from 'react'
import showDesc from './ShowDesc'
import ClearOutlinedIcon from '@material-ui/icons/ClearOutlined';
function Delete() {

    const [isHover, setHover] = useState(false)

    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Usuń zaznaczony obiekt')}
                <ClearOutlinedIcon
                    className='icon'
                />
            </button>
        </div>
    )
}

export default Delete
