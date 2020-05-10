import React, {Component} from "react";
import Todo from "./todo";
import AddTodo from "./addTodo";

class todoList extends Component{
    state={
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [],
        isPremium: JSON.parse(localStorage.getItem('isPremium'))
    }

    addTodo =(todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({todos: todos}, () => localStorage.setItem('todos',JSON.stringify(todos)));
        console.dir(todos);
    }

    canAddTodo = () => {
        if (this.state.isPremium) {
            return true;
        }
        return this.state.todos.length < 5
    }

    render(){
        return(
            <div className="TodoList">
                <h1 className="center blue-text">Todo's</h1>
                <Todo todos={this.state.todos}/>
                <AddTodo addTodo={this.addTodo} canAddTodo={this.canAddTodo}/>

            </div>
        );
    }

}
export default todoList;

