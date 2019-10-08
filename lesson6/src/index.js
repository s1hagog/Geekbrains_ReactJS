import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './app/components/App';

ReactDOM.render(
    <Router>
        <App />
    </Router>
    , document.querySelector('#root'));