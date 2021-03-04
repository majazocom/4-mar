import React, { Component } from 'react';
import Parent from './Parent';

class Grandparent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            giveCandy: false
        }
    }

    render() {
        return (
            <section>
                <p>Grand parent</p>
                <button onClick={() => this.setState({ giveCandy: true })}>Give Candy</button>
                <Parent show={this.state.giveCandy} />
            </section>
        );
    }
}

export default Grandparent;