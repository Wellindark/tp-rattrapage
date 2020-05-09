import React, {Component} from "react";
import {Checkbox} from "react-materialize";

class Premium extends Component {
    state = {
        checkbox: JSON.parse(localStorage.getItem('isPremium'))
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
