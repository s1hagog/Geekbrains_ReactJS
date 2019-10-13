import React, { useEffect } from 'react';
// import axios from 'axios';
import {connect} from 'react-redux';

import {fetchComment} from '../actions/commentsAction';
import CommentCard from '../components/Comment';

// export default class Comment extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             comment: null
//         }
//     }
//     render() {
//         return (
//             <div>
//                 <CommentCard {...this.state.comment} noLink={true} />
//             </div>
//         )
//     }

//     componentDidMount() {
//         axios.get(`http://jsonplaceholder.typicode.com/comments/${this.props.params.commentId}`)
//         .then(response => {
//             const comment = response.data;
//             this.setState({comment})
//         })
//     }
// }

const Comment = (props) => {
    useEffect(() => {
        props.dispatch(fetchComment(props.params.commentId));
    }, [])

    return (
        <div>
            <CommentCard {...props.comment} noLink />
        </div>
    )
}

function mapStateToProps(state){
    return {
        comment: state.comments.comment
    }
}

export default connect(mapStateToProps)(Comment);