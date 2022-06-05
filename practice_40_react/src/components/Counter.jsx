import React, { Component } from 'react';

// Get data from the server

class Counter extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            counter : 0
        }
        this.props = props

    }
    

    
    handleDecrease = () => {
        this.setState({
            counter : this.state.counter - 1
        })
    }
    
    handleIncrease = () => {
        this.setState({
            counter : this.state.counter + 1
        })
    }
    
    render() {
        return (
            <div>
                <h1>Halo</h1>
                <h2>{this.props.nama }</h2>
                <h1>{this.state.counter}</h1>

                <button onClick={() => this.handleDecrease()}>Decrease</button>
                <button onClick={() => this.handleIncrease()}>Increase</button>
            </div>
        );
    }
}

export default Counter;
