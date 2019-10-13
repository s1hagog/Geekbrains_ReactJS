export default function reducer(state={
    comments: [],
    fetching: false,
    error: null
}, action) {
    
    switch(action.type){
        case 'FETCH_COMMENTS':
            return {...state, fetching: true}
        case 'FETCH_COMMENT':
            return {...state, fetching: true}
        case 'FETCH_COMMENTS_REJECTED':
            return {...state, fetching: false, error: action.payload};
        case 'FETCH_COMMENTS_FULLFILLED':
            return {...state, fetching: false, comments: action.payload, error: null};
        case 'FETCH_COMMENT_FULLFILLED':
            return {...state, fetching: false, comment: action.payload, error: null};
    }
    return state;
}