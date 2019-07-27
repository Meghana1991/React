import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Blog/Posts/Posts';
import { Route, Link, Switch, Redirect } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
import FullPost from './FullPost/FullPost'

class Blog extends Component {
    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li> */}
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: 'new-post'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Switch>
                    {/* Switch will check for the first occurance of the matched string and if found ignores the rest. Hence the order matters here, if the /:id is placed first and then /new-post then it registers /:id as anything after the / is considered for /:id and so even if it finds /new-post it thinks it is :id and ignores */}
                    <Route path="/new-post" component={NewPost}></Route>

                    <Route
                        path="/"
                        // exact
                        // render={() => <Posts />}
                        component={Posts}>
                        {/* Both the Home and Home 2 points to the same route / */}
                        {/* render={() => <h1>Home</h1>}> */}
                        {/* render={() => <h1>Home 2</h1>}> */}
                    </Route>
                    <Redirect from='/' to="/posts"></Redirect>
                    {/* <Route
                        path="/:id"
                        component={FullPost}>
                    </Route> */}
                </Switch>
                {/* <section className="Posts"> */}
                {/* <Post />
                    <Post />
                    <Post /> */}
                {/* {post} */}
                {/* </section> */}
                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;