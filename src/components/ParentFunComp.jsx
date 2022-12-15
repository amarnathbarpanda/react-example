import React, { useState } from 'react'
import ClassLifeCycle from './ClassLifeCycle';

const ParentFunComp = () => {
    const [value, setValue] = useState(0);
    return (
        <>
            <h1>ParentFunComp</h1>
            <ClassLifeCycle value={'Hello'}/>
            <button onClick={()=> setValue(value+1)}>Click - {value}</button>
        </>
    )
}

export default ParentFunComp;