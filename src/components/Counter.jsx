import React, { useMemo, useState } from 'react'

const Counter = () => {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);

    const increment1 = () =>{
        setCounter1(counter1 + 1);
    }
    const increment2 = () =>{
        setCounter2(counter2 + 1);
    }

    const isEvent = useMemo(() => {
    for (let i = 0; i < 2000000000; i++);
    return counter1 % 2 === 0;
    }, [counter1]);

  return (
    <>
        <button onClick={increment1}>Counter One - {counter1}</button>
        <span>{isEvent ? 'Even' : 'Odd'}</span>
        <button onClick={increment2}>Counter Two - {counter2}</button>
    </>
  )
}

export default Counter;