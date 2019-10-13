import axios from 'axios';


export function fetchUsers() {
    return function(dispatch){
        dispatch({type: 'FETCH_USERS'});

        axios.get('http://jsonplaceholder.typicode.com/users')
        .then(response => {
            const users = response.data;
            dispatch({type: 'FETCH_USERS_FULLFILLED', payload: users});
        })
        .catch((err) => {
            dispatch({type: 'FETCH_USERS_REJECTED', payload: err})
        })
    }
}

export function fetchUser(id){
    return function(dispatch){
        dispatch({type: 'FETCH_USER'});

        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => {
            const user = response.data;
            dispatch({type: 'FETCH_USER_FULLFILLED', payload: user});
        })
        .catch((err) => {
            dispatch({type: 'FETCH_USERS_REJECTED', payload: err})
        })
    }
}