import React from 'react';

const NavigationBar = (props) => {
    return (
        <nav className='navbar navbar-light bg-light'>
            <a className='navbar-brand' href=''>
                Nav Bar - {props.totalCounters}
            </a>
        </nav>
    );
}

export default NavigationBar;