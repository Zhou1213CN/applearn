import React, {useState} from 'react';
import css from './App.module.css'
import Header from './Header.js'
import Home from './Home.js'
import Navbar from './Navbar.js'
import Login from './Login.js'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  //const [page, setPage] = useState('home');
  const [page, setPage] = useState('login');
  function renderMain(page) {
    return (
      <div>
        <Switch>
            <Route path="/home">
            <div>
              <Home/>
            </div>
            </Route>
            <Route path="/">
            <div>
              <Login/>
            </div>
            </Route>
            </Switch>
      </div>
    )
    }
  return (
  <Router basename={process.env.PUBLIC_URL}>
          <div>
            <main>
              {renderMain(page)}
            </main>
          </div>
      </Router>
    );

}

export default App;
