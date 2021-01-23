import React, { useRef, useState } from "react";
import './MAP.css'
// import ReactDOM from "react-dom";
import { Marker, Map, TileLayer, LayerGroup, Popup, FeatureGroup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";


function EditControler() {
   
    const _created = (e) => { console.log(e); }
    const _edited = (e) => { console.log(e); }
    const _deleted = (e) => { console.log(e); }

    return (
        <FeatureGroup
            id="FeatureGroup" >
            <EditControl
                id="editControl"
                position="topright"
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
                    }
                }
            />
        </FeatureGroup>
    )
}

const map_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'


const zoom = 15
let jsondata = {}


export var markerActivate=1;
export var markerSelect=0;

export function setMarkerActivate(i){markerActivate=i}
export function setMarkerSelect(i){markerSelect=i}
function MAP() {
    const data= [{
        name: "Ławka",
        date: "24.09.2017",
        author: "Janek",
        price: 150,
        heatSign: 1.02,
        influenceRadius: 7,
        image:"https://atlas-content-cdn.pixelsquid.com/stock-images/park-bench-G9Y7qP7-600.jpg",
        
        
    },
    {
        name: "Drzewo",
        date: "23.09.2019",
        author: "Janek",
        price: 180,
        heatSign: 1.02,
        influenceRadius : 79,
        image: "https://i.pinimg.com/736x/e3/d4/b1/e3d4b11d382ab78f907e6b569a4e0c3a.jpg",
        
        
    },
    {
        name: "Lampa",
        date: "02.09.2017",
        author: "Janek",
        price: 250,
        heatSign: 1.32,
        influenceRadius: 43,
        image: "https://www.freepnglogos.com/uploads/street-light-png/electrical-street-light-pole-street-lighting-pole-20.png",
        
        
    }]
   
    const [marker,setMarker] = useState({
        position:[60.778285, 19.449863],
        image:"https://www.freepnglogos.com/uploads/street-light-png/electrical-street-light-pole-street-lighting-pole-20.png",
        heatSign:1.32,
        radius:43,
        price:250});
    const [markerList,setMarkerList] = useState( [] );
    let layerGroupRef = useRef(null);
    let map = useRef(null);



    function getGeoJSON() {
        let layerGroup = layerGroupRef.current;
        console.log("LAYER GROUP", layerGroup);
        let geoJSON = layerGroup.leafletElement.toGeoJSON();

                //dodawanie properties
                let props = geoJSON.features[0].properties;
                props.heatSign = 43; 
                props.radious = 12; 
        
        
            jsondata = JSON.stringify(geoJSON, null, '\t')
            console.log("JSON to send: ", jsondata);
        
        
        

    }
    function iconMaker(url){
        const customMarker = new L.Icon({
            iconUrl: url,
            iconSize: [25, 41],
            iconAnchor: [10, 41],
            popupAnchor: [2, -40]
        });
        return customMarker       
        }

    function addMarker(e) {
        jsondata = JSON.stringify(markerSelect, null, '\t')
        console.log("JSON to send: ", jsondata);
        if(markerActivate===1){
            var xd=e.latlng
        setMarker(prevState => ({
            position:xd,          
            image:data[markerSelect].image,
            heatSign:data[markerSelect].heatSign,
            radius:data[markerSelect].influenceRadius,
            price:data[markerSelect].price


        }))
        setMarkerList([...markerList,
        {
        marker:marker}])}
        console.log(JSON.stringify(markerList));

    }


    return (
        <div className="mapContainer" >
            <button onClick={getGeoJSON}>Export</button>
            <Map
                id="map"
                ref={map}
                onClick={addMarker}
                center={[53.778285, 19.449863]}
                style={{
                    width: "110%",
                    height: "100vh",
                    // left: "250px"
                    //   zIndex: "0"
                }}
                zoom={zoom}>
                <LayerGroup ref={layerGroupRef}
                >
                    
                {markerList.map((m,ind) => 
                    <Marker key={ind} position={m.marker.position} icon={iconMaker(m.marker.image)}>
                        <Popup>
                            <p>Add Point at this Location</p>
                        </Popup>
                    </Marker>
                  )}
                    
                    <EditControler   />
                </LayerGroup>

                <TileLayer url={map_URL} attribution={attribution} />
            </Map>
            
        </div>
    );
}

export default MAP