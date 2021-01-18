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
import Sections from './components/Menu/Sections';
import CreateSections from './components/Menu/CreateSections';
import UsersMaps from './components/Menu/UsersMaps';
import ObjectItem from './components/Menu/ObjectItem';
import YourMaps from './components/Menu/YourMaps';
import Home from './components/Menu/Home'

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null)

  return (
      <div className="App">
        <Router>
          {authenticatedUser? null : <LoginScreen setAuthenticatedUser={setAuthenticatedUser}/>}
              {authenticatedUser==='citizen'
                ? <NavBar2 isUrzednik={false}/> : null
              }
              {authenticatedUser==='official'
                ? <NavBar2 isUrzednik={true}/> : null
              }
          <Switch>
            <Route path="/" exact compotent={Home}>
              <Home></Home>
            </Route>
            <Route path="/edytor">
              <DisplayEditor/>
            </Route>

            <Route path='/CreateSections' component={CreateSections}>
              <CreateSections></CreateSections>
            </Route>
            <Route path='/Sections' component={Sections}>
              <Sections></Sections>
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
           
          </Switch>
        </Router>
      </div>
  );
}

export default App;
