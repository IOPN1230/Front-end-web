import React from 'react'
import ToolBar from './ToolBar/ToolBar';
// import { BrowserRouter as Router } from 'react-router-dom';
import MAP from './EditorMap/MAP';

function DisplayEditor(props) {

  return (
    <>
      {/* <Router> */}
        <ToolBar id={props.id}/>
        <MAP id={props.id}/>
      {/* </Router> */}
      {/* <footer /> */}
    </>
  );
}

export default DisplayEditor