import React, { createContext } from 'react';
import Inner from './inner';
// const colorContext = React.createContext('black')

function Lazy(props) {
    return (
        <div>
            {/* <colorContext.Provider value="white"> */}
            Hey Lazy
            <Inner />
            {/* </colorContext.Provider> */}
        </div>
    )
}
// export const colorContextVr = colorContext
export default Lazy