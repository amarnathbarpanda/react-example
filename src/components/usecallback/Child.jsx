import React, { memo } from 'react'

const Child = ({ counter2, setCounter2 }) => {
    console.log("Child rendered!")
  return (
    <div>Child Comp!</div>
  )
}

// export default Child;
export default memo(Child);