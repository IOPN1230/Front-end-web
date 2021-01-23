import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import DisplayEditor from './components/Editor/DisplayEditor';
import LoginScreen from './components/LoginScreen';
import NavBar2 from './components/Menu/Navbar';
import Sections from './components/Menu/Sections/Sections';
import CreateSections from './components/Menu/Sections/CreateSections';
import UsersMaps from './components/Menu/Maps/UsersMaps';
import ObjectItem from './components/Menu/Objects/ObjectItem';
import YourMaps from './components/Menu/Maps/YourMaps';
import Home from './components/Menu/Home';
import AllSections from './components/Menu/Sections/AllSections'

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null)

  const handleSignOut = () => {
    setAuthenticatedUser(null)
  }

  return (
      <div className="App">
        <Router>
          {authenticatedUser? null : <LoginScreen setAuthenticatedUser={setAuthenticatedUser}/>}
              {authenticatedUser==='citizen'
                ? <NavBar2 isUrzednik={false} onSignOut={handleSignOut} /> : null
              }
              {authenticatedUser==='official'
                ? <NavBar2 isUrzednik={true} onSignOut={handleSignOut} /> : null
              }
          <Switch>
            <Route path="/" exact compotent={Home}>
              <Home></Home>
            </Route>
             <Route path="/Edytor" component={DisplayEditor}>
              <DisplayEditor id={2}/>
            </Route>

            <Route path='/CreateSections' component={CreateSections}>
              <CreateSections></CreateSections>
            </Route>
            <Route path='/Sections' component={Sections}>
              <Sections/>
            </Route>
            <Route path='/UsersMaps' component={UsersMaps}>
              <UsersMaps></UsersMaps>
            </Route>
            <Route path='/ObjectItem' component={ObjectItem}> 
              <ObjectItem></ObjectItem>
            </Route>
            <Route path='/YourMaps' component={YourMaps}>
              <YourMaps></YourMaps>
            </Route>
            <Route path='/AllSections' component={AllSections}>
              <AllSections></AllSections>
            </Route>
           
          </Switch>
        </Router>
      </div>
  );
}

export default App;
