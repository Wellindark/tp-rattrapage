import React, {Component} from "react";
import Todo from "./todo";
import AddTodo from "./addTodo";

class todoList extends Component{
    state={
        todos:[]
    }

    addTodo =(todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({todos: todos})
    }
    
    render(){
        return(
            <div className="TodoList">
                <h1 className="center blue-text">Todo's</h1>
                <Todo todos={this.state.todos}/>
                <AddTodo addTodo={this.addTodo}/>
            </div>
        );
    }

}
export default todoList;

