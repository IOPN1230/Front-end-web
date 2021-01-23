import React, { useRef, useState, useEffect } from "react";
import './MAP.css'
import { Map, TileLayer, Polygon} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";



const map_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const zoom = 13;
function UserMapSector(props) {
    const [center, setCenter] = useState([48, 35])
    console.log(props)

    let map = useRef(null);

    var calcCenter = function () {
        let arr = props.currentMapEdit.data[0].latlngs;
        var x = arr.map(xy => xy.lat);
        var y = arr.map(xy => xy.lng);
        var cx = (Math.min(...x) + Math.max(...x)) / 2;
        var cy = (Math.min(...y) + Math.max(...y)) / 2;
        return [cx, cy];
    }

    useEffect(() => {

    }, [])

    // sector bounds 
    const position2 = props.currentMapEdit.data[0].latlngs;

    var tabBounds = function () {
        let array = []
        let arr = props.currentMapEdit.data[0].latlngs;
        for (var a in arr) {
            let elem = []
            elem.push(arr[a].lat, arr[a].lng)
            array.push(elem)
        }
        return array;
    }

    let b = tabBounds();
    const bounds = L.latLngBounds(b)
    const maxBound = bounds.pad(0.2);
    // sprawdzanie czy punkt, w kóry klikamy znajduje się w ustalonych granicach(sektorze)
    function Coordinates(e) {
        if (bounds.contains(e.latlng)) {
            console.log("Ten punkt znajduje się w granicach.")
        }
        else {
            console.log("Ten punkt znajduje się poza granicami.")
        }
    }

    return (
        <div className="EditorMap">
            {/* <button onClick={getGeoJSON}>Export</button> */}
            <Map
                id="map"
                ref={map}
                onClick={(e) => { Coordinates(e)}}
                center={calcCenter()}
                style={{
                    width: "calc(100% - 150px)",
                    height: "80vh",
                    left: "150px"
                }}
                zoom={zoom}
                bounds={bounds}
                maxBounds={maxBound}
                maxZoom={19}   //przy większym zoomie nie widać mapy tylko szarość
            >
                <Polygon positions={position2} color='red' fillOpacity={0.2} fillColor='grey' /> {/* wielokąt wskazujący granice */}
                <TileLayer url={map_URL} attribution={attribution} />
            </Map>

        </div>
    );
}

export default UserMapSector
