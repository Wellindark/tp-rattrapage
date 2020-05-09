import React, {Component, useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./login";
import TodoList from "./todoList"

export default function App() {
  const[isLog, setIsLog]= useState(localStorage.getItem('isLog') || false);
  const[isLimited, setIsLimited] = useState(localStorage.getItem('isLimited')|| true);
  const[todos, setTodos] = useState(localStorage.getItem('todos')|| [] );

  return (
    <div className={"App"}>
      <Router>
        {!isLog && <button><Link to={"/"}>Accueil</Link></button>}
          <button><Link to={"/todoList"}>TodoList</Link></button>
        <Switch>
            <Route exact path={"/"}><Login setIsLog={setIsLog} isLog={isLog}/></Route>
            <Route exact path={"/todoList"}><TodoList isLog={isLog} isLimited={isLimited} todos={todos} setTodos={setTodos}/></Route>
        </Switch>
      </Router>
    </div>
  );
}



