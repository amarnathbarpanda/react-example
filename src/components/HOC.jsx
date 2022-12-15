import React from 'react'

const styles = {
    dark: {
        background: 'black',
        color: 'white'
    },
    light: {
        color: 'dodgerblue'
    }
}
//  const wp = () =>{

// }
const HOC = (WrappedComp) => {
    return function ({ dark }) {

        let style = {}
        if (dark) {
            style = { ...styles.dark }
        } else {
            style = { ...styles.light }
        }

        return <WrappedComp style={style} />
    }
}


export default HOC;