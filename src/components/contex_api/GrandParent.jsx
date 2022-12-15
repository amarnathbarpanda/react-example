import React, { createContext } from 'react'
import Parent from './Parent';

export const msgContext = createContext();
const GrandParent = () => {

  return (
    <div>
        <h1>GrandParent</h1>
          <msgContext.Provider value={'Hello World!!'}>
            <Parent/>
        </msgContext.Provider>
    </div>
  )
}

export default GrandParent;