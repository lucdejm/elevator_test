import React, { Component } from 'react';


class Elevator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            floor: 0,
            maxFloor: 0,
            minFloor: 0
        };
    }
    
    
    goUp = () => {
    this.setState({floor: this.state.floor + 1})
    };
    
    goDown = () => {
    this.setState({floor: this.state.floor - 1})
    };

    render() {
        return (
          <div>
            <p>{ this.state.floor }</p>
            <button onClick={this.goUp}>Monter</button>
            <button onClick={this.goDown}>Descendre</button>
          </div>
        )
      };
}

export default Elevator;