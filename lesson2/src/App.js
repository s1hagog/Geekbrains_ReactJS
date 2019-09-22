import React from 'react';
import ReactDOM from 'react-dom';
import Developer from './developer';

class App extends React.Component{
    render() {
        return <div>
            <h1>Первое приложение на реакте</h1>
            <p>Hello React</p>
        </div>
    }
}

const dev = new Developer();

console.log(`Developer name: ${dev.name} and position: ${dev.position}`);
ReactDOM.render(<App />, document.querySelector('#root'));