import React, { useState } from 'react'
import showDesc from './ShowDesc'
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined'
import html2canvas from 'html2canvas'; // export mapy do png
import canvas2image from 'canvas2image-2'; // export mapy do png

function  printDocument(){
    var map = document.querySelector("#mapContainer");
    // var map = document.getElementById("#mapContainer");
    var width = map.offsetWidth;
    var height = map.offsetHeight;
    var canvas = document.createElement("canvas");
    var scale = 1; 

    canvas.width = width * scale;
    canvas.height = height * scale; 
    canvas.getContext("2d").scale(scale,scale);

    var opts = {
        scale: scale,
        canvas: canvas,
        logging: true,
        width: width,
        heihgt: height,
        useCORS: true
    };

    html2canvas(map, opts).then(function(canvas) {
        
        var context = canvas.getContext('2d');
        context.ImageSmoothingEnabled = false;
        context.webkitImageSmoothingEnabled = false;
        context.msImageSmoothingEnabled = false;
        context.imageSmoothingEnabled = false;
        var img = canvas2image.convertToJPEG(canvas, canvas.width, canvas.height);

        var a = document.createElement('a');
        var event = new MouseEvent('click');
        a.download = 'Bauhinia';
        a.href = img.src;
        a.dispatchEvent(event);
    })
}



function Export() {


    const [isHover, setHover] = useState(false)
    return (
        <div>
            <button
                type="button"
                className="btn btn-outline-dark btn-lg"
                onClick={() => printDocument()}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
            >
                {isHover && showDesc('Zapisz mapę w formacie jpg')}
                <SaveOutlinedIcon
                    className='icon'
                />
            </button>

        </div>
    )
}

export default Export
