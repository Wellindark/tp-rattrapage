import React, {useState} from 'react';

const Todos =({todos}) =>{
    const todoList= todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                </div>
            )
        })
    ) : (
        <p className="center">Il n'y a plus rien a faire!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
    </div>)
}
export default Todos;
