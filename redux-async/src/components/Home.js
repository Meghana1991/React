import React from 'react';

let Home = (props) => {
    return (
        <div className="container">
            <h4>Welcome to PMTC</h4>
            <img src={require('./../assets/train.png')} /> <br />
        </div>
    )
}

export default Home;