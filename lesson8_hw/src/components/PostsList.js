import React, { Component, useEffect } from 'react';
import {connect} from 'react-redux';
import {fetchPosts} from '../actions/postsAction';


import Post from '../components/Post'


// class PostsList extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             posts: [],
//         }
//     }

//     render() {
//         // if(!this.state.posts.length){
//         //     return <div>No data arrived</div>
//         // }
//         // console.log(this.props);
//         const posts = this.props.posts.map(post => {
//             return <Post key={post.id} {...post} noLink={false}/>
//         })


//         return (
//             <div>
//                 <h1>Posts</h1>
//                 {posts}
//             </div>
//         )
//     }

//     componentDidMount() {
//         // axios.get('https://jsonplaceholder.typicode.com/posts').then(response => {
//         //     const posts = response.data;
//         //     this.setState({posts});
//         // })
//         // console.log('after mounting');
//         this.props.dispatch(fetchPosts());
//     }
// }

const PostsList = (props) => {
    useEffect(() => {
        props.dispatch(fetchPosts());
    })

    return (
        <div>
            <h1>Posts</h1>
            {props.posts.map(post => <Post key={post.id} {...post}/>)}
        </div>
    )
}

function mapStateToProps(state){
    return {
        posts: state.posts.posts
    }
}

export default connect(mapStateToProps)(PostsList);
