import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import './NewPost.css';
import axios from 'axios';

class NewPost extends Component {
    state = {
        title: 'd',
        content: 'qw',
        author: 'Max',
        submitted: false
    }

    postDataHandler() {
        let myObj = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', myObj).then((response) => {
            console.log('postresponse', response)
            /**
             * There are multiple ways to redirect
             * 1) Use the below method where Redirect tag is used
             * 2) Use this.props.history.push method
             */
            // this.setState({ submitted: true })
            this.props.history.push('/posts')
        })
    }

    render() {
        console.log('render')
        let redirect;
        if (this.state.submitted) {
            redirect = <Redirect to="/"></Redirect>
        }
        return (
            < div className="NewPost" >
                {redirect}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" value={this.state.body} onChange={(event) => this.setState({ body: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={() => this.postDataHandler()}>Add Post</button>
            </div >
        );
    }
}

export default NewPost;