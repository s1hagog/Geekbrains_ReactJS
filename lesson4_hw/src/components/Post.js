import React from 'react';


export default class Post extends React.Component{
    render() {
        return (
            <div className="row border">
                <div className="col-12">
                    <h5>{this.props.postTitle}</h5>
                    <p>{this.props.postBody}</p>
                    <small className="text-muted">{this.props.postDate} by <a>{this.props.postUser}</a></small>
                </div>
            </div>
        );
    }
}