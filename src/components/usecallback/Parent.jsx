import React, { useCallback, useState } from 'react';
import Child from './Child'

export const Parent = () => {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const increment1 = () => {
    setCounter1(counter1 + 1);
  }

  const func = useCallback(
      () => {
          console.log("Hello World")
      },
    [counter2],
  )

  // const func = () => {
  //   console.log("Hello World");
  // }


  return (<>
    {/* <Child counter2={counter2} /> */}
    <Child counter2={counter2} func={func} />
    <button onClick={increment1}>Counter1 : {counter1}</button>

  </>
  )
}
