import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./login";


export default function App() {
  const[isLog, setIsLog]= useState(localStorage.getItem('isLog') || false);
  return (
    <div className={"App"}>
      <Router>
        {!isLog && <button><Link to={"/"}>Accueil</Link></button>}
        <Switch>
            <Route exact path={"/"}><Login setIsLog={setIsLog} isLog={isLog}/></Route>
        </Switch>
      </Router>
    </div>
  );
}



