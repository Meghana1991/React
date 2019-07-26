import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }
    componentDidMount() {
        axios.get('/posts').then((response) => {
            const posts = response.data.splice(0, 4);
            const addAuthor = posts.map((post) => {
                return {
                    ...post,
                    author: 'Max'
                }
            })
            // this.setState({posts: response.data})
            this.setState({ posts: addAuthor })
        })
    }

    fetchEachData(id) {
        console.log(id)
        this.setState({ selectedPostId: id })
    }

    render() {

        let post = this.state.posts.map((each, indx) => {
            return <Post
                key={indx}
                author={each.author}
                title={each.title}
                fetch={() => this.fetchEachData(each.id)}
            />
        })

        return (
            <div>
                <section className="Posts">
                    {/* <Post />
                    <Post />
                    <Post /> */}
                    {post}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;