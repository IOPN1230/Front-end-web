import React, { useState } from 'react'
import showDesc from './ShowDesc'
import TrackChangesOutlinedIcon from '@material-ui/icons/TrackChangesOutlined';
function Estimate() {

    const [isHover, setHover] = useState(false)

    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Symuluj rozkład temperatury na mapie')}
                <TrackChangesOutlinedIcon
                    className='icon'
                />
            </button>
        </div>
    )
}

export default Estimate
