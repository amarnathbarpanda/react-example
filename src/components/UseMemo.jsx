import React, { useMemo, useState } from 'react'



const UseMemo = () => {

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment1 = () => {
        setCount1(count1 + 1);
    }

    const increment2 = () => {
        setCount2(count2 + 1);
    }

    // const isEven = () => {
    //     for (let i = 0; i < 1000000000; i++) { }
    //     console.log('Expensive operation done');
    //     return count2 % 2 == 0;
    // }

    const isEven = useMemo(() => {
        for (let i = 0; i < 1000000000; i++) { }
        console.log('Expensive operation done');
        return count2 % 2 == 0;
    }, [count2]);


    return (
        <div>
            <h1>Use Memo</h1>
            <div>
                <button onClick={increment1}>Count1 - {count1}</button>
            </div>
            {/* <span>{isEven() ? "Even" : "Odd" }</span> */}
            <span>{isEven ? "Even" : "Odd" }</span>
            <div>
                <button onClick={increment2}>Count2 - {count2}</button>
            </div>
        </div>
    )
}

export default UseMemo;