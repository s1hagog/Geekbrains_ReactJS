import React, { Component } from 'react';
import axios from 'axios';


import Post from '../components/Post'


export default class PostsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            noLink: false
        }
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
                <h1>Posts</h1>
                {posts}
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
            const posts = response.data;
            this.setState({posts});
        })
    }
}
