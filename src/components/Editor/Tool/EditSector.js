import React, { useState } from 'react'
import showDesc from './ShowDesc'
import BrushOutlinedIcon from '@material-ui/icons/BrushOutlined';
function EditSector() {

    const [isHover, setHover] = useState(false)

    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark  btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Edytuj sektor')}
                <BrushOutlinedIcon
                    className='icon'
                />
            </button>
        </div>
    )
}

export default EditSector
