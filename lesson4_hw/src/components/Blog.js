import React from 'react';

import Post from './Post';

export default class Blog extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
        const posts = this.props.postsData.map((item, index) => {
            return <Post key={index} postTitle={item.postTitle} postBody={item.postBody} postUser={item.postUser} postDate={item.postDate} />
        });
        

        return (
            <div className="container" style={{marginTop: 50 + 'px'}}>
                {posts}
            </div>
        );
    }
}