import React, { Component } from 'react';
import UsersList from '../components/UsersList';

// export default class Users extends Component {
//     render() {
//         return (
//             <>
//                 {
//                     (!this.props.children) ?
//                     <UsersList /> :
//                     (this.props.children)
//                 }
//             </>
//         )
//     }
// }

const Users = (props) => {
    return (
        <>
        {
            !props.children ?
            <UsersList /> :
            props.children
        }
        </>
    )
}

export default Users;