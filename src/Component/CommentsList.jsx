import React, { Component } from 'react';
import SingleComment from './SingleComment';

class CommentsList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <ul>
        {comments.map((comment, index) => (
          <SingleComment key={index} comment={comment} />
        ))}
      </ul>
    );
  }
}

export default CommentsList;