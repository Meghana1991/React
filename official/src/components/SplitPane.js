import React from 'react';

function SplitPane(props) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 left-holder">
                    {props.left}
                </div>
                <div className="col-md-6 right-holder">
                    {props.right}
                </div>
            </div>
        </div>
    )
}

export default SplitPane