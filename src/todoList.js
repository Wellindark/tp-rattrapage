import React, {Component} from "react";
import Todo from "./todo";

class todoList extends Component{
    state={
        todos:[
            {id:1, content:"Acheter du lait"},
            {id:2, content:"Jouer a valorant"}
        ]
    }
    render(){
        return(
            <div className="TodoList">
                <h1 className="center blue-text">Todo's</h1>
                <Todo todos={this.state.todos}/>
            </div>
        );
    }

}
export default todoList;

