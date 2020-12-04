import React from 'react'
import Delete from './Delete'
import Back from './Back'
import Cost from './Cost'
import Estimate from './Estimate'
import Export from './Export'
import Move from './Move'


function HabitantTool() {
    return (
        <div>
            <Back />
            <Move />
            <Delete />
            <Export />
            <Estimate />
            <Cost />
        </div>
    )
}

export default HabitantTool
