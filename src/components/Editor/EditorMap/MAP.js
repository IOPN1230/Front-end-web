import React, { useRef, useState, useEffect } from "react";
import './MAP.css'
// import ReactDOM from "react-dom";
import { Marker, Map, TileLayer, LayerGroup, Popup, FeatureGroup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControler } from '../Tool/CreateSector'
import ToolBar from "../ToolBar/ToolBar";

let jsondata = {};

// function EditControler() {

//     const _created = (e) => { console.log(e); }
//     const _edited = (e) => { console.log(e); }
//     const _deleted = (e) => { console.log(e); }

//     return (
//         <FeatureGroup
//             id="FeatureGroup" >
//             <EditControl
//                 id="editControl"
//                 position="topright"
//                 onCreated={_created}
//                 onEdited={_edited}
//                 onDeleted={_deleted}
//                 draw={
//                     {
//                         rectangle: false,
//                         circle: false,
//                         circlemarker: false,
//                         marker: false,
//                         polyline: false,
//                     }
//                 }
//             />
//         </FeatureGroup>
//     )
// }

const map_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

const position = [51.778285, 19.449863];
const zoom = 15

const customMarker = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [10, 41],
    popupAnchor: [2, -40]
});



function MAP(props) {
    const [center, setCenter] = useState([48, 35])
    console.log(props)

    const data = [{
        name: "Ławka",
        date: "24.09.2017",
        author: "Janek",
        price: 150,
        heatSign: 1.02,
        influenceRadius: 7,
        // image: "https://atlas-content-cdn.pixelsquid.com/stock-images/park-bench-G9Y7qP7-600.jpg",


    },
    {
        name: "Drzewo",
        date: "23.09.2019",
        author: "Janek",
        price: 180,
        heatSign: 1.02,
        influenceRadius: 79,
        // image: "https://i.pinimg.com/736x/e3/d4/b1/e3d4b11d382ab78f907e6b569a4e0c3a.jpg",


    },
    {
        name: "Lampa",
        date: "02.09.2017",
        author: "Janek",
        price: 250,
        heatSign: 1.32,
        influenceRadius: 43,
        // image: "https://www.freepnglogos.com/uploads/street-light-png/electrical-street-light-pole-street-lighting-pole-20.png",
    }]

    const [markerActivate, setMarkerActivate] = useState(1)
    const [markerSelect, setMarkerSelect] = useState(0)
    const [marker, setMarker] = useState([51.778285, 19.449863]);
    const [markerList, setMarkerList] = useState([]);
    let layerGroupRef = useRef(null);
    let map = useRef(null);

    function getGeoJSON() {
        let layerGroup = layerGroupRef.current;
        console.log("LAYER GROUP", layerGroup);
        let geoJSON = layerGroup.leafletElement.toGeoJSON(6);
        // let prop = geoJSON.features[0].properties;
        // prop.heatSign = 55;
        // let prop1 = geoJSON.features[1].properties;
        // prop1.heatSign = 7887;
        console.log("GEOJSON", geoJSON);
        jsondata = JSON.stringify(geoJSON, null, '\t')
        console.log("JSON to send: ", jsondata);
    }

    function addMarker(e) {
        setMarker(e.latlng)
        setMarkerList([...markerList,
        {
            marker: marker
        }])
    }

    var calcCenter = function ()
    {
        let arr = props.currentMapEdit.data[0].latlngs;
        var x = arr.map (xy => xy.lat);
        var y = arr.map (xy => xy.lng);
        var cx = (Math.min (...x) + Math.max (...x)) / 2;
        var cy = (Math.min (...y) + Math.max (...y)) / 2;
        return [cx, cy];
    }

    useEffect(() => {
        
    }, [])

    return (
        <div className="EditorMap">
            {/* <button onClick={getGeoJSON}>Export</button> */}
            <Map
                id="map"
                ref={map}
                //onClick={addMarker}
                center={calcCenter()}
                style={{
                    width: "calc(100% - 150px)",
                    height: "80vh",
                    left: "150px",
                    // zIndex: "-10"
                }}
                zoom={zoom}>
                <LayerGroup id="aa" ref={layerGroupRef}>

                    {markerList.map((m, ind) =>
                        <Marker key={ind} position={m.marker} >
                            <Popup>
                                <p>Add Point at this Location</p>
                            </Popup>
                        </Marker>
                    )}
                    <EditControler dis={props.id} />

                </LayerGroup>

                <TileLayer url={map_URL} attribution={attribution} />
            </Map>

        </div>
    );
}

export default MAP
