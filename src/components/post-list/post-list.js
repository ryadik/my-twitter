import React from "react";
import './post-list.css'

import PostListItem from '../post-list-item/post-list-item'

const PostList = ({posts, onDelete}) => {
  const elements = posts.map(item => {
    return (
        <li key={item.key} className='list-group-item'>
          <PostListItem
              // {..item} // object spread operator
              label={item.label}
              important={item.important}
              onDelete={() => onDelete(item.key)}
          />
        </li>
    )
  })

  return (
      <ul className="app-list list-group">
        {elements}
      </ul>
  )
}
export default PostList
