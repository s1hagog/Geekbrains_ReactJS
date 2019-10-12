import React, { Component } from 'react';
import {connect} from 'react-redux';

import {fetchUsers} from '../actions/usersAction'
import User from './User';

class UsersList extends Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         users: []   
    //     }
    // }
    render() {
        // if(!this.state.users.length) {
        //     return null
        // }

        const users = this.props.users.map(user => {
            return <User key={user.id} {...user} noLink={false}/>
        })

        return (
            <div>
                <h1>Users</h1>
                {users}
            </div>
        )
    }

    componentDidMount() {
        // axios.get('http://jsonplaceholder.typicode.com/users').then(response => {
        //     this.setState({users: response.data});
        // })

        this.props.dispatch(fetchUsers());
    }
}

function mapStateToProps(state){
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps)(UsersList);
