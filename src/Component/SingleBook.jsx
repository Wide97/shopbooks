import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import CommentArea from './CommentArea'; 

class SingleBook extends Component {
  state = {
    selected: false,
  };

  handleClick = () => {
    this.setState(prevState => ({ selected: !prevState.selected }));
  };

  render() {
    const { selected } = this.state;
    const { book } = this.props;

    return (
      <Card
        onClick={this.handleClick}
        style={{ border: selected ? '3px solid red' : 'none' }}
      >
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title style={{ color: 'black' }}>
            {book.title}
          </Card.Title>
          {selected && <CommentArea />}
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
