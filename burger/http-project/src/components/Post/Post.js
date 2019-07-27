import React from 'react';
import { withRouter } from 'react-router-dom'
import './Post.css';
/**
 * To get the route params in the component which is loaded from another component but Not the Router then you can use withRouter hoc which will show all the route related data
 */
const post = (props) => (
    <article onClick={props.fetch} className="Post">
        <h1>{props.title}</h1>
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);
// export default withRouter(post);
export default post;