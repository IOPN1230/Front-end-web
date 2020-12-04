import React, { useState } from 'react'
import showDesc from './ShowDesc'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

function CreateSector() {

    const [isHover, setHover] = useState(false)

    return (
        <div>
            <button
                type="button"
                class="btn btn-outline-dark  btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Utwórz sektor. Zaznaczaj kolejne punkty. Ostatni punkt postaw wtam gdzie pierwszy')}
                <EditOutlinedIcon
                    class='icon'
                />
            </button>
        </div>
    )
}

export default CreateSector
