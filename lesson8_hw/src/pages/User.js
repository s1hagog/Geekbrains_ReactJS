import React, { useEffect } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';

import UserCard from '../components/User';
import {fetchUser} from '../actions/usersAction';


// class User extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             user: null
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <UserCard {...this.props.user} noLink={true}/>
//             </div>
//         )
//     }

//     componentDidMount() {
//         // axios.get(`http://jsonplaceholder.typicode.com/users/${this.props.params.userId}`)
//         // .then(response => {
//         //     const user = response.data;
//         //     this.setState({user})
//         // })
//         this.props.dispatch(fetchUser(this.props.params.userId));
//     }
// }


const User = (props) => {
    
    useEffect(() => {
        props.dispatch(fetchUser(props.params.userId));
    }, [])
    
    return (
        <div>
            <UserCard {...props.user} noLink/>
        </div>
    )
}

function mapStateToProps(state){
    return {
        user: state.users.user
    }
}

export default connect(mapStateToProps)(User);
