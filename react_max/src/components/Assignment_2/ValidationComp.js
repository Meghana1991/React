import React from "react";

let ValidationComp = (props) => {
    let lengthOfInput = props.userInput.length;
    if (lengthOfInput < 5) {
        return (
            <div>
                Text too Short
            </div>
        )
    } else if (lengthOfInput > 5) {
        return (
            <div>
                Text too Long
            </div>
        )
    } else {
        return null
    }
}
export default ValidationComp