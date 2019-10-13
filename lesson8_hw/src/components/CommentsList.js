import React, { Component, useEffect } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';

import Comment from './Comment';
import {fetchComments} from '../actions/commentsAction';

// class CommentsList extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             comments : []
//         }
//     }

//     render() {
//         // console.log(this.props);
//         const comments = this.props.comments.map(comment => {
//             return <Comment key={comment.id} {...comment} noLink={false} />
//         })

//         return (
//             <div>
//                 <h1>Comments</h1>
//                 {comments}
//             </div>
//         )
//     }

//     componentDidMount() {
//         // axios.get('https://jsonplaceholder.typicode.com/comments').then(response => {
//         //     const comments = response.data;
//         //     this.setState({comments});
//         // })
//         // console.log('after mounting')
//         this.props.dispatch(fetchComments())
//     }
// }

const CommentsList = (props) => {
    useEffect(() => {
        props.dispatch(fetchComments());
    })

    return(
        <div>
            <h1>Comments</h1>
            {props.comments.map(comment => <Comment key={comment.id} {...comment}/>)}
        </div>
    )
}

function mapStateToProps(state){
    return{
        comments: state.comments.comments
    }
}

export default connect(mapStateToProps)(CommentsList);
