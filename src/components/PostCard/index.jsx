import './style.css'
import React from 'react';
import p from 'prop-types'
export const PostCard = ({posts})=>{
    return (
        <div className="section-card">
        {posts.map(post =>(

            <article id="card" key={post.title}>
                <img src={post.cover} alt={post.title} className="card-image"></img>

            <div className="card-content">
                <h1 className="card-title">{post.title}</h1>
                <p className="card-text">{post.body}</p>
            </div>
            </article>

        ))}

      </div>

    )
}

PostCard.defaultProps ={
  posts: []
}
PostCard.propTypes = {
  posts: p.array
}
