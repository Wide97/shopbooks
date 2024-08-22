import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class AddComment extends Component {
  state = {
    newComment: '',
    rating: '5'
  };

  handleCommentChange = (e) => {
    this.setState({ newComment: e.target.value });
  };

  handleRatingChange = (e) => {
    this.setState({ rating: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { newComment, rating } = this.state;
    const { onAddComment } = this.props;

    if (newComment.trim()) {
      onAddComment(newComment, rating);
      this.setState({ newComment: '', rating: '5' });
    }
  };

  render() {
    const { newComment, rating } = this.state;

    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId="formNewComment">
          <Form.Label>Aggiungi un commento</Form.Label>
          <Form.Control
            type="text"
            placeholder="Scrivi un commento"
            value={newComment}
            onChange={this.handleCommentChange}
          />
        </Form.Group>
        <Form.Group controlId="formRating">
          <Form.Label>Valutazione (1-5)</Form.Label>
          <Form.Control
            as="select"
            value={rating}
            onChange={this.handleRatingChange}
          >
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </Form.Control>
        </Form.Group>
        <Button type="submit" variant="primary">
          Aggiungi Commento
        </Button>
      </Form>
    );
  }
}

export default AddComment;