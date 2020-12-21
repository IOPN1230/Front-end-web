import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import DisplayEditor from './components/Editor/DisplayEditor';
import LoginScreen from './components/LoginScreen';
import DisplayMenu from './components/Menu/DisplayMenu';

function App() {
  const [authenticatedUser, setAuthenticatedUser] = useState(null)

  return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/">
              {authenticatedUser? null : <LoginScreen setAuthenticatedUser={setAuthenticatedUser}/>}
              {authenticatedUser==='citizen'
                ? <DisplayMenu/> : null
              }
              {authenticatedUser==='official'
                ? <DisplayMenu/> : null
              }
            </Route>
            <Route path="/edytor">
              <DisplayEditor/>
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
