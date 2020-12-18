import React from 'react';
import '../Tool/style.css';
import HabitantTool from '../Tool/HabitantTool'
import BrowserTool from '../Tool/BrowserTool'
import OfficialTool from '../Tool/OfficialTool'


function useUserType(userID) {

  const userType = 0;     //0 - tryb mieszkańca;  1 - tryb przegladarki; 2- tryb urzednika

  return userType
}

function ToolBar(props) {      //Funckja wyswitelająca odpowiedni(zodny z typem uzytkownika) zestaw narzedzi na Toolbar 

  const userType = useUserType(props.id);

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

export default ToolBar
