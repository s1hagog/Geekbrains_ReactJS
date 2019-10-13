import axios from 'axios';


export function fetchPosts() {
    return function(dispatch){
        dispatch({type: 'FETCH_POSTS'});

        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
            const posts = response.data;
            dispatch({type: 'FETCH_POSTS_FULLFILLED', payload: posts});
        })
        .catch((err) => {
            dispatch({type: 'FETCH_POSTS_REJECTED', payload: err})
        })
    }
}

export function fetchPost(id){
    return function(dispatch){
        dispatch({type: 'FETCH_POST'});

        axios.get(`http://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => {
            const post = response.data;
            dispatch({type: 'FETCH_POST_FULLFILLED', payload: post});
        })
        .catch((err) => {
            dispatch({type: 'FETCH_POSTS_REJECTED', payload: err})
        })
    }
}