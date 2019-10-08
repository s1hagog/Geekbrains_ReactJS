import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';

import Main from '../pages/Main';
import About from '../pages/About';
import Contacts from '../pages/Contacts';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                    <li><Link to="/contacts/get/50">Contacts</Link></li>
                </ul>
                <div>
                    <Switch>
                        <Route exact path="/" component={Main}/>
                        <Route path="/home" component={Main} />
                        <Route path="/about" component={About} />
                        <Route path="/contacts" component={Contacts} />
                        <Route path="/contacts/:action/:number" component={Contacts} />
                    </Switch>
                </div>
            </div>
        )
    }
}
