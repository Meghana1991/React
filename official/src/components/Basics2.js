import React, { Component } from 'react';

function Basics2(props) {
    return (
        <div>
            Data HTML recieved from App.
            One way of transferring the data from one Component to another
            <br />
            {props.children}
        </div>
    )
}

export default Basics2