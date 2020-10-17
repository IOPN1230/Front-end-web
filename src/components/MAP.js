import React from 'react'
import './MAP.css'
import { Map, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

function MAP() {

    return (
        <div id='mapContainer'>
            <Map
                center={[51.778285, 19.449863]} 
                zoom={12} 
                style={{ width: '100%', height: '100%'}}>
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
               />
            </Map>
        </div>
    )
}

export default MAP
