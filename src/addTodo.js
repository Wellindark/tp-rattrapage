import React ,{Component} from "react";

class AddTodo extends Component {
    state = {
        content:''
    }
    handleChange=(e)=>{
        this.setState({
            content: e.target.value
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
