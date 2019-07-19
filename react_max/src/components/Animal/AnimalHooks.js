import React, { useEffect, useRef } from "react";

let AnimalHooks = () => {
    /**
     * In functional based components
     * or call React Hooks
     * we will use useRef 
     */
    const refElement = useRef(null)

    /**
     * In hooks the alternative
     * for the componentDidMount is useEffect
     * which gets called after the render()
     */
    useEffect(() => {
        refElement.current.focus();
    });

    return (
        <div>
            <input
                key="ii"
                ref={refElement}
                type="text" />
        </div>)
}

export default AnimalHooks