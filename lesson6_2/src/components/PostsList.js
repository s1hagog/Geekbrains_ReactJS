import React, { Component } from 'react';
import postStore from '../stores/postsStore';
import {getPosts, addPost} from '../actions/actionCreators';


import Post from '../components/Post'


export default class PostsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            noLink: false
        };

        this.onPostChange = this.onPostChange.bind(this);
        this.newPost = this.newPost.bind(this);
    }

    render() {
        if(!this.state.posts.length){
            return <div>No data arrived</div>
        }

        const posts = this.state.posts.map(post => {
            return <Post key={post.id} {...post} noLink={this.state.noLink}/>
        })


        return (
            <div>
                <button onClick={this.newPost} className="btn btn-primary">Add Post</button>
                <h1>Posts</h1>
                {posts}
            </div>
        )
    }

    newPost() {
        const body = 'This is sample text for post\'\s body' ;
        const userId = 3;
        const title = 'This is post title';

        addPost(title, body, userId);
    }

    onPostChange() {
        const posts = postStore.posts;
        this.setState({posts})
    }

    componentDidMount() {
        // axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
        //     const posts = response.data;
        //     this.setState({posts});
        // })
        getPosts();
        postStore.on('change', this.onPostChange);
    }

    componentWillUnmount() {
        postStore.removeListener('change', this.onPostChange);
    }
}
