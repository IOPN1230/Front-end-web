import React from 'react';
import './style.css'
import useToolBar from '../ToolBar/ToolBar';
import HabitantTool from './HabitantTool'
import BrowserTool from './BrowserTool'
import OfficialTool from './OfficialTool'


function Tool(props) {      //Funckja wyswitelająca odpowiedni(zodny z typem uzytkownika) zestaw narzedzi na Toolbar 

  const userType = useToolBar(props.id);

  if (userType === 0) {
    return (
      <>
        <div>
          <nav className='nav-menu' >
            <ul className='nav-menu-items'>
              <HabitantTool />
            </ul>
          </nav>
        </div>
      </>
    );
  }
  else if (userType === 1) {
    return (
      <>
        <div>
          <nav className='nav-menu' >
            <ul className='nav-menu-items'>
              <BrowserTool />
            </ul>
          </nav>
        </div>
      </>

    );
  }
  else if (userType === 2) {
    return (
      <>
        <div>
          <nav className='nav-menu' >
            <ul className='nav-menu-items'>
              <OfficialTool />
            </ul>
          </nav>
        </div>
      </>

    );
  }
}

export default Tool
