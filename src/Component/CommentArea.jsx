import React, { Component } from 'react';
import { Spinner, Alert, Form, Button } from 'react-bootstrap';

class CommentArea extends Component {
  state = {
    comments: [],  
    isLoading: true,  
    error: null,  
    newComment: ''
  };

  componentDidMount() {
    this.fetchComments();
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

  handleInputChange = (e) => {
    this.setState({ newComment: e.target.value });
  };

  handleAddComment = (e) => {
    e.stopPropagation(); 
    const { newComment } = this.state;
    if (newComment.trim()) {
      const commentData = {
        comment: newComment,
        elementId: this.props.bookId
      };

      fetch('https://striveschool-api.herokuapp.com/api/comments/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjQzMzI3NzgsImV4cCI6MTcyNTU0MjM3OH0.Nem5TBCFtAHGg6RQPOw2lmZjcCCB_W2P1_lJMf-4ZX0'
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
          this.setState({ newComment: '' });
        })
        .catch(error => {
          this.setState({ error: error.message });
        });
    }
  };

  render() {
    const { comments, isLoading, error, newComment } = this.state;

    return (
      <div>
        {isLoading && <Spinner animation="border" />}
        {error && <Alert variant="danger">C'è stato un errore: {error}</Alert>}
        {!isLoading && !error && (
          <div>
            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment.comment}</li>
              ))}
            </ul>
            <Form>
              <Form.Group controlId="formNewComment">
                <Form.Label>Aggiungi un commento</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Scrivi un commento"
                  value={newComment}
                  onChange={this.handleInputChange}
                />
              </Form.Group>
              <Button
                variant="primary"
                onClick={(e) => {
                  e.stopPropagation(); 
                  this.handleAddComment(e);
                }}
              >
                Aggiungi Commento
              </Button>
            </Form>
          </div>
        )}
      </div>
    );
  }
}

export default CommentArea;