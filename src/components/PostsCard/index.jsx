import React from 'react'
import '../PostsCard/styles.css'

const PostCard = ({cover , title, body , id}) => {
  return (
    <div className='post'>
        <img src={cover} alt={title} />
        <div className="post-content">
            <h2>{title}</h2>
            <p>{body}</p>
            <span>{id}</span> 
        </div>
    </div>
  )
}

export default PostCard