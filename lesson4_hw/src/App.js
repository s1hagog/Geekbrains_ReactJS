import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';

import Blog from './components/Blog';
import WelcomeModalWindow from './components/WelcomeModalWindow';

import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
    render () {
        const postsData = [
            {
                postTitle: 'Labore pariatur nisi minim laboris veniam anim commodo occaecat quis Lorem laboris.',
                postBody: 'Tempor voluptate adipisicing nostrud exercitation tempor nostrud aute culpa ea aliqua. Cillum do mollit ipsum culpa cupidatat eu mollit mollit fugiat mollit nisi. Tempor occaecat minim sint irure minim ipsum labore do occaecat excepteur reprehenderit qui.',
                postUser: 'John',
                postDate: 'December 27, 2013'
            },
            {
                postTitle: 'Labore pariatur nisi minim laboris veniam anim commodo occaecat quis Lorem laboris.',
                postBody: 'Tempor voluptate adipisicing nostrud exercitation tempor nostrud aute culpa ea aliqua. Cillum do mollit ipsum culpa cupidatat eu mollit mollit fugiat mollit nisi. Tempor occaecat minim sint irure minim ipsum labore do occaecat excepteur reprehenderit qui.',
                postUser: 'Alex',
                postDate: 'October 27, 2015'
            },
            {
                postTitle: 'Labore pariatur nisi minim laboris veniam anim commodo occaecat quis Lorem laboris.',
                postBody: 'Tempor voluptate adipisicing nostrud exercitation tempor nostrud aute culpa ea aliqua. Cillum do mollit ipsum culpa cupidatat eu mollit mollit fugiat mollit nisi. Tempor occaecat minim sint irure minim ipsum labore do occaecat excepteur reprehenderit qui.',
                postUser: 'Mufasa',
                postDate: 'November 11, 1997'
            },
            {
                postTitle: 'Labore pariatur nisi minim laboris veniam anim commodo occaecat quis Lorem laboris.',
                postBody: 'Tempor voluptate adipisicing nostrud exercitation tempor nostrud aute culpa ea aliqua. Cillum do mollit ipsum culpa cupidatat eu mollit mollit fugiat mollit nisi. Tempor occaecat minim sint irure minim ipsum labore do occaecat excepteur reprehenderit qui.',
                postUser: 'Judy',
                postDate: 'December 27, 2013'
            }
        ];

        return  <div>
            <WelcomeModalWindow />
            <Blog postsData={postsData}/>
        </div>
    }
}


ReactDOM.render(<App />, document.querySelector('#root'));