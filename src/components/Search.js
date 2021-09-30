import React, { Component } from "react";

class Search extends Component {
    state = {
        display: ''
    }

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form">
                    <div className="field">
                        <label>Search Video</label>
                        <input 
                            type="text"
                            value={ this.state.display }
                            onChange= { e => this.setState({ display: e.target.value })  }  // update state: display property with setState() & assign e to state property to target empty string
                        />
                    </div>
                    <button onClick={ e => e.preventDefault() }>Search</button>
                </form>
            </div>
        )
    }
}

export default Search