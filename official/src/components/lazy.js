import React, { createContext } from 'react';
import Inner from './inner';
export const ColorContext = React.createContext('black')

function Lazy(props) {
    return (
        <div>
            <ColorContext.Provider value="white">
                {/* Hey Lazy */}
                <Inner />
            </ColorContext.Provider>
        </div>
    )
}
export default Lazy