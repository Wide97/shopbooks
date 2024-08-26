import React, { Component } from "react";
import { Spinner, Alert } from "react-bootstrap";
import CommentsList from "./CommentsList";
import AddComment from "./AddComment";

class CommentArea extends Component {
  state = {
    comments: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps) {
    if (this.props.bookId && this.props.bookId !== prevProps.bookId) {
      this.fetchComments();
    }
  }

  fetchComments = () => {
    this.setState({ isLoading: true, error: null });

    fetch(
      `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmEzNjZjOWYyNjBjYzAwMTVjYzBkZmYiLCJpYXQiOjE3MjQzMzI3NzgsImV4cCI6MTcyNTU0MjM3OH0.Nem5TBCFtAHGg6RQPOw2lmZjcCCB_W2P1_lJMf-4ZX0",
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Fetched comments:", data);
        this.setState({ comments: data, isLoading: false });
      })
      .catch((error) => {
        console.error("Error fetching comments:", error);
        this.setState({ error: error.message, isLoading: false });
      });
  };

  render() {
    console.log("Current bookId:", this.props.bookId);
    const { comments, isLoading, error } = this.state;

    return (
      <div>
        {isLoading && <Spinner animation="border" />}
        {error && (
          <Alert variant="danger">C'è stato un errore: {error}</Alert>
        )}
        {!isLoading && !error && comments.length > 0 && (
          <div>
            <CommentsList comments={comments} />
            <AddComment onAddComment={this.handleAddComment} />
          </div>
        )}
        {!isLoading && !error && comments.length === 0 && (
          <p className="text-center">Nessun commento disponibile per questo libro.</p>
        )}
      </div>
    );
  }
}

export default CommentArea;