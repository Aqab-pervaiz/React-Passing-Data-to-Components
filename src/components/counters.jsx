import React, { Component } from 'react'
import Counter from './counter'  

export default class Counters extends Component {

  
  render() {
    return (
      <div>
        <button onClick={this.props.resetState} className="btn btn-primary btn-sm m-2">Reset</button>
        {this.props.counters.map(count=>
            {
              return <Counter counter={count} key={count.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement}/>
  
            })}
      
      </div>
    )
  }
}
