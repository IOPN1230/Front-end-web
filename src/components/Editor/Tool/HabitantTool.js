import React from 'react'
import Delete from './Delete'
import Back from './Back'
import Cost from './Cost'
import Estimate from './Estimate'
import Export from './Export'
import Move from './Move'
import { useCookies } from 'react-cookie';

function HabitantTool() {
    const [cookies] = useCookies();

    return (
        <div>
            <Back />
            <Move />
            <Delete />
            <Export />
            <Estimate />
            <Cost total={cookies.currentCost}/>
        </div>
    )
}

export default HabitantTool
