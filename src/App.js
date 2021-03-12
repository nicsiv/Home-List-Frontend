
import React from 'react';
import logo from './logo.png';
import background from './background1.jpg';

import Nav from './components/Nav';
import Login from './components/Login';
import FurnitureContainer from './components/FurnitureContainer';
import FurnitureCard from './components/FurnitureCard';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './App.css';


function App() {
  return (
    <BrowserRouter>
    <div className="App" >
      
      <Nav/>
      <header className="App-header" >
        <img src={logo} className="App-logo" alt="logo" />
        
        <div>        
          <div class="ui buttons">
          <button class="ui large button"><Link to='/login'>New User</Link></button>
          <div class="or"></div>
          <button class="ui large button"><Link to='/login'>Existing User</Link></button>
        </div>

          <Switch>
            <Route exact path='/FurnitureContainer' component={FurnitureContainer}/>
            <Route exact path='/FurnitureCard' component={FurnitureCard}/>
            <Route exact path='/login' component={Login}/>
          </Switch>
        </div>

        
      </header>
    </div>
    </BrowserRouter>
  );
}

export default App;
