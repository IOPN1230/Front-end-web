import React from 'react';
import '../Tool/style.css';
import HabitantTool from '../Tool/HabitantTool'
import BrowserTool from '../Tool/BrowserTool'
import OfficialTool from '../Tool/OfficialTool'


function ToolBar(props) {      //Funckja wyswitelająca odpowiedni(zgodny z typem uzytkownika) zestaw narzedzi na Toolbar 

  const userType = parseInt(props.id);

  if (userType === 0) {
    return (
      <>
        <div>
          <nav className='nav-menu' >
            {/* <ul className='nav-menu-items'> */}
            <HabitantTool />
            {/* </ul> */}
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
            {/* <ul className='nav-menu-items'> */}
            <BrowserTool />
            {/* </ul> */}
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
            {/* <ul className='nav-menu-items'> */}
            <OfficialTool />
            {/* </ul> */}
          </nav>
        </div>
      </>

    );
  }
}

export default ToolBar
