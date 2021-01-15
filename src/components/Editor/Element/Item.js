import { Component } from "react";
import { GiFruitTree } from "react-icons/gi";
import Desc from './Desc'



export  class Item extends Component{

        
    constructor(props ){
        super(props);

            this.state = {
                
            hover:false,

            data: [{
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
        }}
        
        toggleHover() {
           this.setState({hover:!this.state.hover})
        }
    
    render() {
      
     
        return (
            <div>
              {this.state.data.map(data => (
                <div key={data.name}>
                  <button
                     type="button"
                     className="btn btn-primary"
                     onMouseEnter={() => {this.toggleHover(true)}}
                     onMouseLeave={() => {this.toggleHover(false)}}>
                     
                     
            
                <img src={data.image} height="50" width="50" ></img>
               
            </button>
                  
                </div>
              ))}
            </div>
          );
    }
}
      

