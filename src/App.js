import Grandparent from "./components/Grandparent";
import React, { Component } from "module";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <section>
        <Grandparent />
      </section>
     );
  }
}
 
export default App;