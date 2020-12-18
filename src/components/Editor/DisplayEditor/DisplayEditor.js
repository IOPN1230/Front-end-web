import React from 'react'
import './styleEditor.css'
import MAP from '../EditorMap/MAP';
import ToolBar from '../ToolBar/ToolBar';
// import ChooseBar from '../ChooseBar/index';

function DisplayEditor() {
  return (
    <div class="container">
      <div class="row">
        <div class="col-2"><ToolBar /></div>
        <div class="col-10"><MAP /></div>
        {/* <div class="w-100"></div>
        <div class="col"><ChooseBar/></div> */}
      </div>
    </div>
    // <>
    //     <MAP id='map' />
    //     <Tool />
    // </>
  );
}

export default DisplayEditor