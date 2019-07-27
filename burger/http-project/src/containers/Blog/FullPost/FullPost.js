import React, { Component } from 'react';

import './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
    /**
     * The equivalent to ngoninit is componentdidmount
     * But here the component is already existing and should trigger hook 
     * only on the fetch of id
     */
    state = {
        post: []
    }

    componentDidMount() {
        // console.log('componentDidUpdate Order 2')
        console.log(this.props)
        /**
         * Updating the state will cause the react to update which inturn
         * calls the componentDidUpdate and then again the get call
         * which will make it infinite loop
         * Inorder to avoid this, we can add this condition
         */
        if (this.props.match.params.id) {
            axios.get('/posts/' + this.props.match.params.id)
                .then((response) => {
                    this.setState({ post: response.data })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }

    render() {
        // console.log('render Order 1')
        let post = <p>Please select a Post!</p>;

        if (this.props.id) {
            post = 'Loading...'
        }

        if (this.state.post) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.post.title}</h1>
                    <p>{this.state.post.body}</p>
                    <div className="Edit">
                        <button className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;