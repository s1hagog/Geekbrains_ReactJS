export default function reducer(state={
    posts: [],
    fetching: false,
    error: null
}, action) {
    
    switch(action.type){
        case 'FETCH_POSTS':
            return {...state, fetching: true}
        case 'FETCH_POST':
            return {...state, fetching: true}
        case 'FETCH_POSTS_REJECTED':
            return {...state, fetching: false, error: action.payload};
        case 'FETCH_POSTS_FULLFILLED':
            return {...state, fetching: false, posts: action.payload, error: null};
        case 'FETCH_POST_FULLFILLED':
            return {...state, fetching: false, post: action.payload, error: null};
    }
    return state;
}