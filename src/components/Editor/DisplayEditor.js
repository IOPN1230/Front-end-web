import React, { useEffect, useState } from 'react'
import ToolBar from './ToolBar/ToolBar';
// import { BrowserRouter as Router } from 'react-router-dom';
import MAP from './EditorMap/MAP';
import { useCookies } from 'react-cookie';
import ItemBar from './ItemBar/ItemBar';
import './DisplayEditor.css'

function DisplayEditor(props) {
  const [cookies] = useCookies();
  const [userType, setUserType] = useState('')

  return (
    <div className="DisplayEditor">
      {/* <Router> */}
      <ToolBar id={0}/>
      <MAP id={props.id} currentMapEdit={cookies.currentMapEdit}/>
      { cookies.userType === 'citizen' ? <ItemBar/> : null }
      {/* </Router> */}
      {/* <footer /> */}
    </div>
  );
}

export default DisplayEditor