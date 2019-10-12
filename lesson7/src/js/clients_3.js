import {applyMiddleware, createStore} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import Axios from 'axios';


const initialState = {
    users: [],
    fetched: false,
    fetching: false,
    error: null
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'FETCHING_USERS':
            return {...state, fetching: true};
        case 'FETCH_USERS_ERROR':
            return {...state, fetching:false, error: action.payload};
        case 'RECEIVED_USERS':
            return {...state, fetched: true, fetching: false, users: action.payload,};
    }
    return state;
}

const middleware = applyMiddleware(promise, thunk, createLogger());
const store = createStore(reducer, middleware);

// store.dispatch((dispatch)=> {
//     dispatch({type: 'FETCHING_USERS', })
//     Axios.get('http://jsonplaceholder.typicode.com/users/')
//     .then(response => {
//         dispatch({type: 'RECEIVED_USERS', payload: response.data})
//     }).catch(err => {
//         dispatch({type: 'FETCH_USERS_ERROR', payload: err})
//     })
// })

store.dispatch({
    type: 'FOO',
    payload: Axios.get('http://jsonplaceholder.typicode.com/users/')
})