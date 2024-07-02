import React, { Component } from 'react'
import Navbar from './components/navbar';
import Counters from './components/counters';
import Movies from './components/movies';


export default class App extends Component {
  state={
    counters:
    [
        { id : 1, value : 3 },
        { id : 2, value : 6 },
        { id : 3, value : 2 }


    ]
};

clickIncrement=counter=>{
  const counters=[...this.state.counters];
  const index=counters.indexOf(counter);
  counters[index]={...counter};
  counters[index].value++;
  this.setState({counters});


};
onDeleteClick=counterId=>
{
  console.log("In delete functio and id is ", counterId);
  const counters=this.state.counters.filter(c=>c.id!==counterId);
  this.setState({counters});


};

resetState=()=>
  {

    console.log("we are in reset state");

  const counters=this.state.counters.map(c=>{
    c.value=0;
    return c;
  })
  this.setState({counters});
}

render() {

  return (
    <div className="">
      <Navbar counter={this.state.counters.filter(c=>c.value!==0).length}/>
     <Counters resetState={this.resetState} counters={this.state.counters}  onDelete={this.onDeleteClick} onIncrement={this.clickIncrement} />
    <Movies />
    </div>
  );
}
}

