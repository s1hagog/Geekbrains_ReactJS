import React, { Component } from 'react';
import CommentsList from '../components/CommentsList';

export default class Comments extends Component {
    render() {
        return (
            <>
                {!this.props.children ? <CommentsList /> : this.props.children} 
            </>
        )
    }
}
