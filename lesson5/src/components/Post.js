import React, { Component } from 'react';
import {Link} from 'react-router';

export default class Post extends Component {
    render() {
        const {id, title, body} = this.props;

        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">
                    {
                        noLink ?
                        title :
                        <Link to={`/posts/${id}`}>{title}</Link>
                    }
                </div>
                <div className="card-body text-secondary">
                    <p>{body}</p>
                    {noLink ? <Link className="card-link" to='/posts/'>Back to all posts</Link> : null}
                </div>
            </div>
        )
    }
}
