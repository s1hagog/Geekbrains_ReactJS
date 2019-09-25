import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';

class App extends React.Component {
    render () {
        const menuItems = [
            {href:"/", title:"Main"},
            {href:"/contacts", title:"Contacts"},
            {href:"/goods", title:"Goods"},
            {href:"/about", title:"About Us"},
        ];

        return  <div>
            <Menu titleMenu="Main website's menu" items={menuItems}/>
        </div>
    }
}

ReactDOM.render(<App />, document.querySelector('#root'));