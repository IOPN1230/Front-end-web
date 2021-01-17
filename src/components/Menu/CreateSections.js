/*
    Klasa utwórz sektor - w budowie
 */
import React,{Component} from 'react'
import MAP from './DrawMap'
import { ActionsMap } from './../../service/Actions'
import { User } from './../../service/User'


class CreateSections extends Component {
    render(){
         return (
        <div className='createSector'>
           <MAP> </MAP>
        </div>
    )
    }
   
    onsubmit(sectorData) {
        ActionsMap.createAndSetValue({"author":User.getUserData().uid,"data":sectorData}).then((object)=>{
            let key = object.key
            let value = object.value
        })
    }
}

export default CreateSections
