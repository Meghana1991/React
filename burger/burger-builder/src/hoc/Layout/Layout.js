import React from 'react';
import './Layout.css'
/**
 * Let us make the Layout component as a wrapper
 * which wraps multiple elements inside
 */
const Layout = (props) => {
    return (
        <div>
            <div>Toolbar, Side Drawer, Backdrop </div>
            <main className="Content">
                {props.children}
            </main>
        </div>
    )
}

export default Layout