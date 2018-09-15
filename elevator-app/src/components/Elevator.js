import React, { Component } from 'react';

const URLINITIALSTATE = "http://localhost:5000/floor"

class Elevator extends Component {
    constructor(props) {
        super(props)
        this.state = {
            floor: 0,
            maxFloor: 0,
            minFloor: 0,
            message: ""
        };
    }
    
    // initialize state floor/maxFloor/minFloor from DB
    componentDidMount() {
        fetch(URLINITIALSTATE)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            this.setState({ floor: data.defaultFloor })
            this.setState({ maxFloor: data.maxFloor })
            this.setState({ minFloor: data.minFloor })
            console.log(this.state.maxFloor)
        })
    }
    
    // post the current floor of the elevator
    postCurrentFloor () {
        fetch(URLINITIALSTATE, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                currentFloor: this.state.floor,
            })
        })
    }
    
    // add 1 floor to the current floor + clear/setup message if last floor + post the current floor
    goUp = () => {
        if(this.state.floor < this.state.maxFloor) {
            this.setState({floor: this.state.floor + 1});
            // clear message if last floor
            this.setState({message : ""});
            this.postCurrentFloor();
        } else {
            // setup warning message if last floor
            this.setState({message : "Vous êtes au dernier étage"});
        }
    };
    
    // substract 1 floor to the current floor + clear/setup message if lowest floor + post the current floor
    goDown = () => {
        if(this.state.floor > this.state.minFloor) {
            this.setState({floor: this.state.floor - 1});
            // clear message if lowest floor
            this.setState({message : ""});
            this.postCurrentFloor();
        } else {
            // setup warning message if lowest floor
            this.setState({message : "Vous êtes à l'étage le plus bas"});
        }
    };

    render() {
        return (
          <div>
            <p>{ this.state.floor }</p>
            <button onClick={this.goUp}>Monter</button>
            <button onClick={this.goDown}>Descendre</button>
            <p>{ this.state.message }</p>
          </div>
        )
      };
}

export default Elevator;