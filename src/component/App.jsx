import { Component } from "react";
import "../scss/App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      answer: "Yes",
      num: 0,
    };
    this.eventHandler =this.eventHandler.bind(this)
  }
  eventHandler() {
   this.setState(function(prevState){
     return{
      num : prevState.num +1 
     }
   })
  }
  render() {
    return (
      <div className="App">
        <h1>do you love me ? {this.state.answer} </h1>
        <button onClick={this.eventHandler}>click me!</button>
        <h1> {this.state.num} </h1>
      </div>
    );
  }
}

export default App;
