import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=> setCount(count + 1)}>Inc</button>
    </div>
  )
}

export default UseState;

// import React, { Component } from 'react'

// export default class UseState extends Component {
//     constructor(){
//         super();
//         this.state = {
//             count: 0
//         }
//     }

//     changeState = () => {
//         this.setState({
//             count: this.state.count + 1
//         });
//     }

//   render() {
//     return (
//       <div>
//         <h1>Count: {this.state.count}</h1>
//         <button onClick={this.changeState}>Inc</button>
//       </div>
//     )
//   }
// }

