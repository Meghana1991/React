import React, { useState } from 'react';

let Note = (props) => {
    return (
        <div style={
            {
                height: 200,
                width: 300,
                background: 'yellow',
                margin: 10,
                padding: 10
            }
        }>
            <div className="pull-right">
                <button
                    className="btn btn-danger"
                    onClick={(event) => props.deleteHandler(props.data)}>Delete</button>
                <button
                    className="btn btn-info"
                    onClick={(event) => props.editHandler(props.data)}>Edit</button>
            </div>
            <p>{props.data}</p>
        </div>
    )
}
export default Note