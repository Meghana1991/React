import React, { Component } from 'react';

/**
 * A simple flaw or error in the application can break the entire application. Inorder to save that, we
 * need to catch the errors separately without interrupting the regular flow
 */

class ErrorHandling extends Component {
    constructor(props) {
        super(props);
        this.state = { error: null, errorInfo: null };
    }

    componentDidCatch(error, errorInfo) {
        // Catch errors in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
        // You can also log error messages to an error reporting service here
    }

    render() {
        if (this.state.errorInfo) {
            // Error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                </div>
            );
        }
        // Normally, just render children
        return this.props.children;
    }
}

export default ErrorHandling