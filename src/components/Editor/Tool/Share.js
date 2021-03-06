import React, { useState } from 'react'
import showDesc from './ShowDesc'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
function Share() {

    const [isHover, setHover] = useState(false)

    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Udostępnij mapę dla użytkownika')}
                <SaveOutlinedIcon
                    className='icon' 
                />
            </button>
        </div>
    )
}

export default Share
