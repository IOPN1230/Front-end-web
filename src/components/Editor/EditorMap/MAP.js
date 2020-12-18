import React from 'react'
import './MAP.css'
import { Circle, MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


function Coordinates(e) {
    console.log('', e)
    //  console.log('marker clicked', e)
}
function MAP() {

    return (
        <div id='mapContainer'>
            <MapContainer id='map'
                center={[51.778285, 19.449863]}
                zoom={12}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer
                    attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />


                <Circle
                    center={[51.70, 19.44]}
                    radius={500}

                    fillOpacity={0.1}
                    color={'red'}

                    eventHandlers={{
                        click: (e) => Coordinates(e)
                    }}
                />
                <Circle
                    center={[51.71, 19.44]}
                    radius={100}

                    fillOpacity={0.1}
                    color={'blue'}

                    eventHandlers={{
                        click: (e) => Coordinates(e)
                    }} />

            </MapContainer>
        </div>


    )
}

export default MAP