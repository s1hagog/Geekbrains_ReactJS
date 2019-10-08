import React, { Component } from 'react';
// import axios from 'axios';
import User from './User';
import usersStore from '../stores/usersStore';
import {getUsers, addUser} from '../actions/actionCreators';

export default class UsersList extends Component {
    constructor(props){
        super(props);
        this.state = {
            users: []   
        }

        this.onUsersChange = this.onUsersChange.bind(this);
        this.addUser = this.addUser.bind(this); 
    }
    render() {
        if(!this.state.users.length) {
            return null
        }

        const users = this.state.users.map(user => {
            return <User key={user.id} {...user} noLink={false}/>
        })

        return (
            <div>
                <button onClick={this.addUser} className="btn btn-primary">Add User</button>
                <h1>Users</h1>
                {users}
            </div>
        )
    }

    addUser(){
        const user = {
            name: 'Alex Moshak',
            username: 's1hagog',
            email: 'moshakalex@gmail.com'
        };
        let {name, username, email} = user;
        addUser(name, username, email);
    }

    onUsersChange(){
        const users = usersStore.users;
        this.setState({users});
    }

    componentDidMount() {
        // axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
        //     this.setState({users: response.data});
        // })
        getUsers();
        usersStore.on('change', this.onUsersChange);
    }

    componentWillUnmount(){
        usersStore.removeListener('change', this.onUsersChange);
    }
}
