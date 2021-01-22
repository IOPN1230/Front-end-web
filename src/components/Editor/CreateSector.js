import React, { useState } from 'react'
import showDesc from './ShowDesc'
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import { FeatureGroup } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";


export const EditControler = (props) => {
    // const [mapLayers, setMapLayers] = useState([]);

 
    let display;
    let int = parseInt(props.dis);
    if (int === 2) {
        display = true
    }
    else {
        display = false
    }

    const _created = (e) => { console.log(e); }
    const _edited = (e) => { console.log(e); }
    const _deleted = (e) => { console.log(e); }
   

    return (
        <FeatureGroup
            id="FeatureGroup">
            <EditControl
                id="editControl"
                onCreated={_created}
                onEdited={_edited}
                onDeleted={_deleted}
                draw={
                    {
                        rectangle: false,
                        circle: false,
                        circlemarker: false,
                        marker: false,
                        polyline: false,
                        polygon: display
                    }
                }
                edit={
                    {
                        edit: display,
                        remove: display
                    }
                }
            />
            {/* {console.log(JSON.stringify(mapLayers, null, '\t'))} */}
        </FeatureGroup>
    )
}


function CreateSector() {
    // var map = document.querySelector("#map");

    const [isHover, setHover] = useState(false)
    const [check, setCheck] = useState(false);
    // let x = true; 
    // ...
    // setCheck(prevCheck => !prevCheck);
    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark  btn-lg"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                onClick={() => {
                    setCheck(check => !check);
                }}
            >
                {console.log('check', check)}
                {isHover && showDesc('Utwórz sektor. Zaznaczaj kolejne punkty. Ostatni punkt postaw wtam gdzie pierwszy')}
                <EditOutlinedIcon
                    className='icon'
                />
            </button>
        </div>
    )
}

export default CreateSector
