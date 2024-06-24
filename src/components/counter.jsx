import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Counter extends Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div className='mx-2 mt-2'>
        <span className={this.badgeClasses()}>{this.checkCounter()}</span>
        <button onClick={this.handleClick} className="btn btn-secondary btn-sm">Increment</button>
       
      </div>
    );
  }
  handleClick=()=> {
    this.setState({count:this.state.count+1})
  }
  badgeClasses() {
    let classes = "badge mt-3 mx-1 align-content-center text-bg-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  checkCounter() {
    const { count } = this.state;
    return this.state.count === 0 ? "Zero" : count;
  }
}

export default Counter;
