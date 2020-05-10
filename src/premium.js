import React, {Component} from "react";
import {Checkbox} from "react-materialize";

class Premium extends Component {
    state = {
        checkbox: JSON.parse(localStorage.getItem('isPremium')),
        todos: localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : []

    }



    render() {
        return (
            <div>
                <Checkbox
                    id="is-premium"
                    label="Premium"
                    value="Premium"
                    checked={this.state.checkbox}
                    onChange={() => this.togglePremium()}
                    disabled={this.state.todos.length>5}
                />
            </div>
        )
    }

    togglePremium() {
        this.setState({
            checkbox: !this.state.checkbox
        }, () => localStorage.setItem('isPremium', JSON.stringify(this.state.checkbox)))
    }
}

export default Premium;
