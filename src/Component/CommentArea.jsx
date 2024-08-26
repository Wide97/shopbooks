import React, { Component } from 'react';
import { Spinner, Alert } from 'react-bootstrap';
import CommentsList from './CommentsList';
import AddComment from './AddComment';

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: true,
    error: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.bookId && this.props.bookId !== prevProps.bookId) {
      this.fetchComments(); 
    }
  }

  fetchComments = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`, {
      headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjQzMzI3NzgsImV4cCI6MTcyNTU0MjM3OH0.Nem5TBCFtAHGg6RQPOw2lmZjcCCB_W2P1_lJMf-4ZX0"
      }
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.setState({ comments: data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, isLoading: false });
      });
  };

  handleAddComment = (commentText, rating) => {
    const commentData = {
      comment: commentText,
      rate: rating,
      elementId: this.props.bookId
    };

    fetch('https://striveschool-api.herokuapp.com/api/comments/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjQzMzI3NzgsImV4cCI6MTcyNTU0MjM3OH0.Nem5TBCFtAHGg6RQPOw2lmZjcCCB_W2P1_lJMf-4ZX0"
      },
      body: JSON.stringify(commentData)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(() => {
        this.fetchComments(); 
      })
      .catch(error => {
        this.setState({ error: error.message });
      });
  };

  render() {
    const { comments, isLoading, error } = this.state;

    return (
      <div>
        {isLoading && <Spinner animation="border" />}
        {error && <Alert variant="danger">C'è stato un errore: {error}</Alert>}
        {!isLoading && !error && (
          <div>
            <CommentsList comments={comments} />
            <AddComment onAddComment={this.handleAddComment} />
          </div>
        )}
      </div>
    );
  }
}

export default CommentArea;