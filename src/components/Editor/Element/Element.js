import React from 'react';
import './Element.css'
import useChooseBar from '../ChooseBar/ChooseBar';
import { Item} from "./Item";









function RenderKeys(){
  
  var arr = [{
    name: "Ławka",
    date: "24.09.2017",
    author: "Janek",
    price: 150,
    heatSign: 1.02,
    influenceRadius: 7,
    image:"https://atlas-content-cdn.pixelsquid.com/stock-images/park-bench-G9Y7qP7-600.jpg"
  },  {
    name: "Drzewo",
    date: "23.09.2019",
    author: "Janek",
    price: 180,
    heatSign: 1.02,
    influenceRadius : 79,
    image: "https://i.pinimg.com/736x/e3/d4/b1/e3d4b11d382ab78f907e6b569a4e0c3a.jpg"
  },{  
  name: "Lampa",
  date: "02.09.2017",
  author: "Janek",
  price: 250,
  heatSign: 1.32,
  influenceRadius: 43,
  image: "https://www.freepnglogos.com/uploads/street-light-png/electrical-street-light-pole-street-lighting-pole-20.png"
}]
  return arr.map((val) => { 
    return <button type="button" 
    className="btn btn-primary" >
      {arr.name}
    
    </button>
  });
};

function Element(props) {      //Funckja wyswitelająca odpowiedni(zodny z typem uzytkownika) zestaw narzedzi na Toolbar 

  const userType = useChooseBar(props.id);

  if (userType === 0) {
    return (
      <>
        <div className='scrollmenu'>
        <Item />

        </div>
      </>
    );
  }
  else if (userType === 1) {
    return (
      <>
        <div className='scrollmenu'>
        <a href="#home">Home</a>
          
         
        </div>
        <h2>Horizontal Scrollable Menu</h2>
      </>

    );
  }
  else if (userType === 2) {
    return (
      <>
        <div className='scrollmenu'>
        <a href="#home">Home</a>
        
         
        </div>
      </>

    );
  }
}

export default Element
