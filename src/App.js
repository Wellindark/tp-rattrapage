import React, {useState} from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Login from "./login";
import TodoList from "./todoList"
import Premium from "./premium";

export default function App() {
  const[isLog, setIsLog]= useState(localStorage.getItem('isLog') || false);
  const[isPremium, setIsPremium] = useState(localStorage.getItem('isPremium')|| false);
  const[todos, setTodos] = useState(localStorage.getItem('todos')|| [] );

  return (
    <div className={"App"}>
      <Router>
        {!isLog && <button><Link to={"/"}>Accueil</Link></button>}
          <button><Link to={"/todoList"}>TodoList</Link></button>
          <button><Link to={"/premium"}>Premium</Link></button>
        <Switch>
            <Route exact path={"/"}><Login setIsLog={setIsLog} isLog={isLog}/></Route>
            <Route exact path={"/todoList"}><TodoList isLog={isLog} isPremium={isPremium} todos={todos} setTodos={setTodos}/></Route>
            <Route exact path={"/premium"}><Premium isLog={isLog} isPremium={isPremium} setIsPremium={setIsPremium} todos={todos}/></Route>
        </Switch>
      </Router>
    </div>
  );
}



