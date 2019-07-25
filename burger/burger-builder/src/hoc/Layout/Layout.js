import React from 'react';
import Aux from '../Auxillary/Aux';
import './Layout.css'
/**
 * Let us make the Layout component as a wrapper
 * which wraps multiple elements inside
 */
const Layout = (props) => {
    return (
        <Aux>
            <div>Toolbar, Side Drawer, Backdrop </div>
            <main className="Content">
                {props.children}
            </main>
        </Aux>
    )
}

export default Layout