import React from 'react';
import './Post.css';

var Post = (props) => {
    return (
        <div className = "post">
            <h2>{props.post.title}</h2>
            <p className = 'post__author'>{props.post.author}</p>
            <p className = 'post__content'>{props.post.content}</p>
        </div>
    )
}

export default Post;