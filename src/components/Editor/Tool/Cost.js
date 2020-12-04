import React from 'react'
import TextField from '@material-ui/core/TextField';
function Cost() {

  return (
    <div>
      <p>Koszt:</p>
      <TextField
        class="text_field"
        id="outlined-basic"
        defaultValue="0.0"
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
    </div>
  )
}

export default Cost
