import React, { useEffect, useState } from 'react';

const FuncLifecycle = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    useEffect(() => {
      
    console.log('componentDidMount');

    //   return () => {
    //     console.log('componentWillUnmount');
    //   }
    }, [])

    useEffect(() => {
      
        console.log('componentDidUpdate');
        
        return () => {
            console.log('componentWillUnmount');
        }
    });// componentDidMount and componentDidUpdate
    
    // useEffect(() => {
    //   console.log('counter1 updated')
    // }, [counter1]);

    // useEffect(() => {
    //     console.log('counter2 updated')
    // }, [counter2]);
    
    

  return (
    <div>
        <div>{counter1}</div>
        <button onClick={()=> setCounter1(counter1+1)}>inc counter 1</button>
        <div>{counter2}</div>
        <button onClick={()=> setCounter2(counter2+1)}>inc counter 2</button>
    </div>
  )
}

export default FuncLifecycle;