import React, { Component } from 'react';
import axios from 'axios';

import PostCard from '../components/Post';

export default class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: null,
            noLink: true
        }
    }
    render() {
        return (
            <div>
                {this.state.post && <PostCard {...this.state.post} noLink={this.state.noLink}/>}
            </div>
        )
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
        .then(response => {
            const post = response.data;
            this.setState({post});
        })
    }
}
