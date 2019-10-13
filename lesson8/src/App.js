import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo';

class App extends Component {
    render() {
        return (
            <Todo/>
        )
    }
}


ReactDOM.render(<App/>, document.querySelector('#root'));