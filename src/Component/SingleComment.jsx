import React, { Component } from 'react';

class SingleComment extends Component {
  render() {
    const { comment } = this.props;

    return (
      <li>
        <p>{comment.comment}</p>
        <p>Rating: {comment.rate}</p>
      </li>
    );
  }
}

export default SingleComment;