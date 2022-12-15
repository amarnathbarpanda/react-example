import React, { useRef } from 'react'

const UseRefEx = () => {
    const inputRef = useRef(null);

    const handleInput = () =>{
        console.log("Function Call")

        console.log(inputRef);

        inputRef.current.value = 1000;
        // inputRef.current.style.color = 'red';
        // inputRef.current.style.display = 'none';
    }

  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={handleInput}>Click</button>
    </div>
  )
}

export default UseRefEx;