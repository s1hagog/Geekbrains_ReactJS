import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
    render () {
        const menuItems = [
            {href:"/", title:"Main"},
            {href:"/contacts", title:"Contacts"},
            {href:"/goods", title:"Goods"},
            {href:"/about", title:"About Us"},
        ];

        return  <div>
            <h1>Первое React приложение</h1>
            <Login />
            <Menu titleMenu="Main website's menu" items={menuItems}/>
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));