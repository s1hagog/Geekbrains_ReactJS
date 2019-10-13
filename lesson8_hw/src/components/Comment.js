import React, { Component } from 'react';
import { Link } from 'react-router';

// export default class Comment extends Component {
//     render() {
//         const {id, postId, name, email, body, noLink} = this.props;

        // return (
        //     <div className="card border-secondary mb-3">
        //         <div className="card-body">
        //             <h5 className="card-title"><Link to={`/posts/${postId}`}>{name}</Link></h5>
        //             <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
        //             <p className="card-text">
        //                 {
        //                     noLink ?
        //                     body :
        //                     <Link to={`/comments/${id}`}>{body}</Link>
        //                 }
        //             </p>
        //             {noLink ? <Link className="card-link" to='/comments/'>Back to all comments</Link> : null}
        //         </div>
        //     </div>
        // )
//     }
// }

const Comment = (props) => {
    const {id, postId, name, email, body, noLink} = props;

    return (
        <div className="card border-secondary mb-3">
            <div className="card-body">
                <h5 className="card-title"><Link to={`/posts/${postId}`}>{name}</Link></h5>
                <h6 className="card-subtitle mb-2 text-muted">{email}</h6>
                <p className="card-text">
                    {
                        noLink ?
                        body :
                        <Link to={`/comments/${id}`}>{body}</Link>
                    }
                </p>
                {noLink ? <Link className="card-link" to='/comments/'>Back to all comments</Link> : null}
            </div>
        </div>
    )
}

export default Comment;
