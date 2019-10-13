import React, { useEffect } from 'react';
// import axios from 'axios';
import {fetchPost} from '../actions/postsAction';
import PostCard from '../components/Post';
import {connect} from 'react-redux';

// export default class Post extends Component {
//     constructor(props){
//         super(props);
//         this.state = {
//             post: null,
//             noLink: true
//         }
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.post && <PostCard {...this.state.post} noLink={this.state.noLink}/>}
//             </div>
//         )
//     }

//     componentDidMount() {
//         axios.get(`https://jsonplaceholder.typicode.com/posts/${this.props.params.postId}`)
//         .then(response => {
//             const post = response.data;
//             this.setState({post});
//         })
//     }
// }


const Post = (props) => {
    useEffect(() => {
        props.dispatch(fetchPost(props.params.postId));
    }, []);

    return (
        <div>
            <PostCard {...props.post} noLink></PostCard>
        </div>
    )
}

function mapStateToProps(state){
    // console.log('that\'\s a state =>>  ' + state);
    return {
        post: state.posts.post,
        state: state
    }
}

export default connect(mapStateToProps)(Post);