import React from 'react';
import Comment from './Comment';

const CommentList = (props) => {

const commentNodes = props.data.map(comment => {
  return (
    <Comment
      author={comment.author}
      key={comment.id}>
      {comment.text}
      </Comment>
  )
})

  return (
    <div className="comment-list">
      {commentNodes}
      </div>
  )
}

export default CommentList;
