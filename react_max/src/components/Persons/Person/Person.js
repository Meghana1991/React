import React from "react";

let Person = (props) => {
    console.log('Person rendering')
    return (
        <div>
            {/* 
                Here 2 way binding as well as 1 way is happening
                Here Parent to Child and Child to Parent communication is happening 
                Child to Parent - onClick, OnChange sending events inside props
                Parent to Child - props recieved by Parents
            */}
            <p onClick={props.clickFn}>I am {props.name} and I am {props.type}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changedFn} />
        </div>)
}

export default Person