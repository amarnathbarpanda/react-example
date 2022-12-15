import React, { Component } from 'react'

export default class ClassLifeCycle extends Component {

  // there are three phases of lifecycle of a component
  // 1. Mounting
  // 2. Updating 
  // 3. Unmounting

  constructor() {
    super();
    console.log("Constructor");

    this.state = {
      count: 0
    }
  }
  componentWillMount(){
    console.log('componentWillMount')
  }
  componentDidMount() {
    console.log('componentDidMount');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate')
  }
  shouldComponentUpdate(prevProps, prevState) {
    if (prevState.value !== this.state.value) {
      return true;
    }
    else {
      return false;
    }
  }
  componentDidUpdate(){
    console.log('componentDidUpdate');
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  increment=()=> {
    this.setState({count: this.state.count+1})
  }

  render() {
    console.log('render')
    return (
      <div>
        <p>{this.props.value}</p>
        <div>{this.state.count}</div>
        {/* <button onClick={this.increment.bind(this)}>Click Me!</button> */}
        <button onClick = {this.increment}>Click Me!</button>
      </div>
    )
  }
}
