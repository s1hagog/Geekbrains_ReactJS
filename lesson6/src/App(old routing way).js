import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainPage from './app/pages/Main';
import AboutPage from './app/pages/About';
import ContactsPage from './app/pages/Contacts';
import { throws } from 'assert';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            route: window.location.hash.substr(1) // #/ ; we use substr() to get rid off '#' char
        }
    }
    render() {
        let Child;

        switch(this.state.route){
            case '/about' :
                Child = AboutPage;
                break;
            case '/contacts':
                Child = ContactsPage;
                break;
            default:
                Child = MainPage;
        }

        return (
            <div>
                <header>Application v1</header>
                <ul>
                    <li><a href="#/home">Main</a></li>
                    <li><a href="#/about">About us</a></li>
                    <li><a href="#/contacts">Contacts</a></li>
                </ul>
                <div>
                    <Child />
                </div>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener('hashchange', () => {
            this.setState({route: window.location.hash.substr(1)})
        })
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));