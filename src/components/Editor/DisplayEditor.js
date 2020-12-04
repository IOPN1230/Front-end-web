import React from 'react'
import Tool from './Tool/Tool';
import { BrowserRouter as Router } from 'react-router-dom';
import MAP from './EditorMap/MAP';

function DisplayEditor() {
  return (
    <>
      <Router>
        <MAP />
        <Tool />
      </Router>
      <footer />
    </>
  );
}

export default DisplayEditor