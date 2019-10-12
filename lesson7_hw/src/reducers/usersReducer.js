export default function reducer(state={
    users: [],
    fetching: false,
    error: null
}, action) {
    
    switch(action.type){
        case 'FETCH_USERS':
            return {...state, fetching: true}
        case 'FETCH_USER':
            return {...state, fetching: true}
        case 'FETCH_USERS_REJECTED':
            return {...state, fetching: false, error: action.payload};
        case 'FETCH_USERS_FULLFILLED':
            return {...state, fetching: false, users: action.payload, error: null};
        case 'FETCH_USER_FULLFILLED':
            return {...state, fetching: false, user: action.payload, error: null};
    }

    return state;
}