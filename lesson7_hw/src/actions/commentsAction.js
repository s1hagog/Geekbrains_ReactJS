import axios from 'axios';


export function fetchComments() {
    return function(dispatch){
        dispatch({type: 'FETCH_COMMENTS'});

        axios.get('http://jsonplaceholder.typicode.com/comments')
        .then(response => {
            const comments = response.data;
            dispatch({type: 'FETCH_COMMENTS_FULLFILLED', payload: comments});
        })
        .catch((err) => {
            dispatch({type: 'FETCH_COMMENTS_REJECTED', payload: err})
        })
    }
}

export function fetchComment(id){
    return function(dispatch){
        dispatch({type: 'FETCH_COMMENT'});

        axios.get(`http://jsonplaceholder.typicode.com/comments/${id}`)
        .then(response => {
            const comment = response.data;
            dispatch({type: 'FETCH_COMMENT_FULLFILLED', payload: comment});
        })
        .catch((err) => {
            dispatch({type: 'FETCH_COMMENTS_REJECTED', payload: err})
        })
    }
}