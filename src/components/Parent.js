import React, { Component } from 'react';
import Child from './Child';
class Parent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            giveCandyToChild: 1
        }
    }

    giveCandy = (e) => {
        console.log(e);
        if (e.target.id === "2") {
            this.setState({
                giveCandyToChild: 2
            })
        } else {
            this.setState({
                giveCandyToChild: 3
            })
        }
    }

    render() {
        return (
            <section>
                {
                    this.props.show ?
                        <>
                            <p>Parent</p>
                            <button id="2" onClick={this.giveCandy}>Nope</button>
                            <button id="3" onClick={this.giveCandy}>Alright, it's saturday.</button>
                        </>
                        :
                        null
                }

                {
                    this.props.show && this.state.giveCandyToChild > 1 ? <Child energyLevel={this.state.giveCandyToChild} /> : null
                }

            </section>);
    }
}

export default Parent;