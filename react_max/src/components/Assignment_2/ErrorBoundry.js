import React, { Component } from 'react'

class ErrorBoundary extends Component {
    state = {
        hasError: '',
        errorMessage: ''
    }

    /**
     * componentDidCatch is React 16+ feature
     */
    componentDidCatch = (error, info) => {
        this.setState({ hasError: true, errorMessage: info })
    }
    render() {
        if (this.state.hasError) {
            return <div>
                <p>The Error Occured Here</p>
            </div>
        } else {
            return this.props.children;
        }
    }
}

export default ErrorBoundary;