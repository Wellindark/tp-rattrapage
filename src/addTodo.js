import React ,{Component} from "react";
import {Checkbox} from "react-materialize";

class AddTodo extends Component {
    state = {
        content:'',
        isDone: false
    }
    handleChange=(e)=>{
        this.setState({
            content: e.target.value,
            isDone: false
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
    }
    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Ajouter un todo:</label>
                    <input type="text" disabled={!this.props.canAddTodo()} onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo;
