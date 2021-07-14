import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Hompage.component';
import Hats from './pages/Hats/Hats.component';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='shop/hats' component={Hats}/>  
        </Switch>
      </Router>     
    </div>
  );
}

export default App;
