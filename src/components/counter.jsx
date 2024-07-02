import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class Counter extends Component {
 

  render() {
   
    return (
      <div className='mx-2 mt-2'>
        <span className={this.badgeClasses()}>{this.checkCounter()}</span>
        <button onClick={()=>this.props.onIncrement(this.props.counter)} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">Delete</button>
      </div>
    );
  }

  badgeClasses() {
    let classes = "badge mt-3 mx-1 align-content-center text-bg-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  checkCounter=()=> {
    
     return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
  }
}

export default Counter;
