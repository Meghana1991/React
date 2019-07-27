import React, { Component } from 'react'
import axios from 'axios'
import Post from './../../../components/Post/Post'
import { Link } from 'react-router-dom'
import FullPost from '../FullPost/FullPost';
import { Route } from 'react-router-dom'

class Posts extends Component {
    state = {
        posts: [],
    };
    componentDidMount() {
        /**
         * To get the props which are created by Router
         */
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
        console.log(this.props)
        // this.setState({ selectedPostId: id })
        /**
         * We can navigate to a particular route using <Link to> or by programmatic way.
         */
        this.props.history.push('/' + id)
    }

    render() {
        let post = this.state.posts.map((each, indx) => {
            return (
                // Here we are passing the route params to the Post component
                // <Link to={'/' + each.id} key={indx}>
                <Post
                    key={indx}
                    author={each.author}
                    title={each.title}
                    fetch={() => this.fetchEachData(each.id)} />
                // </Link>
            )
        });

        return (
            <div>
                <section className="Posts">
                    {post}
                </section>
                {/* Here I want the child component to be loading */}
                <Route path="/:id" exact component={FullPost} />
            </div>
        );
    }
}

export default Posts 