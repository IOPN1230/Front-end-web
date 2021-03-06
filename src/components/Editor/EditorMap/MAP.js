import React, { useRef, useState, useEffect } from "react";
import './MAP.css'
// import ReactDOM from "react-dom";
import { Marker, Map, TileLayer, LayerGroup, Popup, Polygon, withLeaflet } from "react-leaflet";
import L, { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { EditControler } from '../Tool/CreateSector'
import ToolBar from "../ToolBar/ToolBar";
import { useCookies } from 'react-cookie';
import { Button } from "react-bootstrap";
import axios from 'axios';

const map_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
const attribution = '&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'

function MAP(props) {
    const [center, setCenter] = useState([48, 35])
    const [clickTime, setClickTime] = useState(0)
    const [cookies, setCookie] = useCookies();
    const [total, setTotal] = useState(0)

    const [marker, setMarker] = useState([51.778285, 19.449863]);
    const [markerList, setMarkerList] = useState([]);
    let layerGroupRef = useRef(null);
    let map = useRef(null);

    useEffect(() => {
        setCookie('currentCost', total)
    }, [])

    function getGeoJSON() {
        let layerGroup = layerGroupRef.current;
        let geoJSON = layerGroup.leafletElement.toGeoJSON(6);

        markerList.forEach((marker, index) => {
            geoJSON.features[index].properties.heatConduction = marker.heatConducton;
            geoJSON.features[index].properties.heatDecline = marker.heatDecline;
            geoJSON.features[index].properties.emission = marker.emission;
        })

        let latlngsArr = props.currentMapEdit.data[0].latlngs.map(item => [item.lng, item.lat])
        latlngsArr[latlngsArr.length] = latlngsArr[0];
        const payload = {
            type: 'Feature',
            properties: {},
            geometry: {
                type: 'Polygon',
                coordinates: [
                    latlngsArr
                ]
            }
        }
        geoJSON.features[markerList.length] = payload;

        let jsondata = JSON.stringify(geoJSON, null, '\t')

        axios({method: 'post', url: 'https://iopn1230backend.westeurope.azurecontainer.io:8080/api/heat-map/', responseType: 'arraybuffer', data: jsondata, headers: {'Content-Type': 'application/json'}}).then(res => {
            var blob = new Blob([res.data], {type: "image/png"});
            var link = document.createElement('a');
            link.href = window.URL.createObjectURL(blob);
            link.download = `MapaCiepła-${props.currentMapEdit.name}.png`;
            link.click();
        })
    }

    var calcCenter = function ()
    {
        let arr = props.currentMapEdit.data[0].latlngs;
        var x = arr.map(xy => xy.lat);
        var y = arr.map(xy => xy.lng);
        var cx = (Math.min(...x) + Math.max(...x)) / 2;
        var cy = (Math.min(...y) + Math.max(...y)) / 2;
        return [cx, cy];
    }

    const addItem = async (e) => {
        setClickTime(Date.now())
        const total = calculateTotal() + parseFloat(cookies.selectedObject.price);
        if (Date.now() - clickTime < 500) {
            const marker = cookies.selectedObject;
            const position = [e.latlng.lat, e.latlng.lng];
            if (bounds.contains(e.latlng)) {
                if (marker) {
                    marker.position = position;
                    let confirmValue = window.confirm(`Chcesz dodać ${cookies.selectedObject.name}?`);
                    if (confirmValue === true) {
                        alert('Dodano.');
                        setMarkerList([...markerList, marker])
                        setCookie('selectedObject', '');
                        setCookie('currentCost', total);
                    }
                }
            } else {
                alert('Nie można dodać obiektu poza sektorem.');
            }
        }
    }

    useEffect(() => {
        setCookie('currentCost', calculateTotal())
    }, [markerList])

    const calculateTotal = () => {
        let total = 0;
        markerList.forEach(m => total += parseFloat(m.price))
        return total;
    }

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


    return (
        <div className="EditorMap">

            <Button onClick={() => getGeoJSON()}>Oblicz mapę ciepła</Button>
            <Map
                id="map"
                ref={map}
                //onClick={addMarker}
                center={calcCenter()}
                style={{
                    width: "calc(100% - 150px)",
                    height: "80vh",
                    left: "150px",
                    // zIndex: "0"
                }}
                doubleClickZoom={null}
                zoom={12}
                onmousedown={(e) => addItem(e)}
                bounds={bounds}
                maxBounds={maxBound}
                maxZoom={19}   //przy większym zoomie nie widać mapy tylko szarość
                preferCanvas="true" // musi być, żeby kształty po eksporcie do png/jpg, były na swoim miejscu
            >
                <Polygon positions={position2} color='red' fillOpacity={0.2} fillColor='grey' /> {/* wielokąt wskazujący granice */}
                <LayerGroup id="layerGroupRef" ref={layerGroupRef}>

                    {markerList.map((m, ind) =>
                        <Marker key={ind} position={m.position} icon={new Icon({ iconUrl: m.image, iconSize: [50, 50] })}>
                            <Popup onClose={() => setMarkerList(markerList.filter(marker => marker !== m))}>
                                {m.name}
                            </Popup>
                        </Marker>
                    )}
                    {/* <EditControler dis={props.id} /> */}

                </LayerGroup>

                <TileLayer url={map_URL} attribution={attribution} />

            </Map>
        </div>
    );
}

export default MAP