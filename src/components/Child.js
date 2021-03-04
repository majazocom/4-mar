import React, { Component } from 'react';
class Child extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( <section>
            {
                this.props.energyLevel === 2 ? 
                <p>Energy: Low</p> 
                : <p>Energy: Over 9000</p>
            }
        </section> );
    }
}
 
export default Child;