import React from 'react'
import TextField from '@material-ui/core/TextField';


function Cost({total}) {

  return (
    <div>
      <p>Koszt:</p>
      <TextField
        className="text_field"
        id="outlined-basic"
        defaultValue="0.0"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
        value={total}
      />
    </div>
  )
}

export default Cost
