import React, { Component } from 'react';

class ErrorBoundry extends Component {
    state = {
        hasError: false,
    }
    componentDidCatch() {
        this.setState({
            hasError: true,
        });
    }

    render() {
        if (this.state.hasError) {
            return (<h1>ERROR</h1>);
        }
        return this.props.children; //то, что в теле компонента
    }
}

export default ErrorBoundry;