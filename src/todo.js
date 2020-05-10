import React from 'react';
import {Checkbox} from "react-materialize";

const Todos =({todos}) =>{
    const todoList= todos.length ? (
        todos.map(todo => {
            return(
                <div className="collection-item" key={todo.id}>
                    <span>
                        {todo.content}
                        <Checkbox
                            id={todo.id.toString()}
                            value={todo.id.toString()}
                            label = ''
                            checked={todo.isDone}
                            onChange={()=> setIsDone(todo.id)}
                        />
                    </span>
                </div>
            )
        })
    ) : (
        <p className="center">Il n'y a plus rien a faire!</p>
    )

    const setIsDone= (id) =>{
        let newArray = todos.map((element)=>{
            if (element.id == id){
                if(element.isDone==false){
                    element.isDone = true;
                }
                else{
                    element.isDone= false;
                }
            }
            return element
        })
        localStorage.setItem('todos',JSON.stringify(newArray))
    }

    return(
        <div className="todos collection">
            {todoList}
    </div>)
}
export default Todos;
