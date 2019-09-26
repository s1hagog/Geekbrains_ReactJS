import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/random.css';

class App extends React.Component {
    render () {
        const menuItems = [
            {href:"/", title:"Main"},
            {href:"/contacts", title:"Contacts"},
            {href:"/goods", title:"Goods"},
            {href:"/about", title:"About Us"},
        ];

        return  <div>
            <header>
                <Menu titleMenu="Main website's menu" items={menuItems}/>
            </header>
            <h1 className="display-1 mainHeader">My First React App</h1>
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));