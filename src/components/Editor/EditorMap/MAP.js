import React from 'react'
import './MAP.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';



function MAP() {


    return (
        <div id='mapContainer'>
            <MapContainer
                center={[51.778285, 19.449863]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </MapContainer>
        </div>
    )
}

export default MAP