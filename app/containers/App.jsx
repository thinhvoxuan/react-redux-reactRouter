import React, { Component, PropTypes } from 'react';
import Navigation from 'containers/Navigation';

export default class App extends Component {
    render() {
        return (
            <div>
                <h1>This is an something </h1>
                <Navigation />
                {this.props.children}
            </div>
        );
    }
};

App.propTypes = {
    children: PropTypes.object
};
