import React, { Component } from 'react';
import PostsList from '../components/PostsList';


// export default class Posts extends Component {
//     render() {
//         return (
//             <div>
//                 {
//                     (!this.props.children) ?
//                     <PostsList /> :
//                     this.props.children
//                 }
//             </div>
//         )
//     }
// }


const Posts = (props) => {
    return (
        <div>
            {
                !props.children ?
                <PostsList /> :
                props.children
            }
        </div>
    )
}

export default Posts;