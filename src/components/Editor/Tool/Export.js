import React, { useState } from 'react'
import showDesc from './ShowDesc'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
function Export() {

    const [isHover, setHover] = useState(false)
    return (
        <div>
            <button
                type="button"
                class="btn btn-outline-dark btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Zapisz mapę w formacie jpg')}
                <SaveOutlinedIcon
                    class='icon'
                />
            </button>
        </div>
    )
}

export default Export
