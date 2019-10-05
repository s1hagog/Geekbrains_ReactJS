import React, { Component } from 'react';
import axios from 'axios';

import Comment from './Comment'

export default class CommentsList extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments : []
        }
    }
    render() {
        const comments = this.state.comments.map(comment => {
            return <Comment key={comment.id} {...comment} />
        })

        return (
            <div>
                {comments}
            </div>
        )
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
            const comments = response.data;
            this.setState({comments});
        })
    }
}
