import React from 'react'
import './styleEditor.css'
import MAP from '../EditorMap/MAP';
import ToolBar from '../ToolBar/ToolBar';

function DisplayEditor() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"><ToolBar /></div>
        <div className="col-10"><MAP/></div>
        {/* <div class="w-100"></div>
        <div class="col"><p>ChooseBar<p></div> */}
      </div>
    </div>
  );
}

export default DisplayEditor