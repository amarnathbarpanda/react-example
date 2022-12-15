import React, { useContext } from 'react'
import { msgContext } from './GrandParent';

const Child = () => {
    const msg = useContext(msgContext);
  return (
    <>
        <h3>Child</h3>
          {/* <msgContext.Consumer>
            {value => <h4>{value}</h4>}
          </msgContext.Consumer> */}

          <h4>{msg}</h4>
    </>
  )
}

export default Child;