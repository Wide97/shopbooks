import React, { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Container, FormControl, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchValue: "",
  };
  render() {
    const { books } = this.props;

    return (
      <Container>
        <Row>
          <Col>
            <FormControl
              type="text"
              placeholder="cerca un libro"
              value={this.state.searchValue}
              onChange={(e) => {
                this.setState({
                  searchValue: e.target.value,
                });
              }}
            />
          </Col>
        </Row>
        <Row>
          {books.map((book, index) => (
            <Col key={index} xs={12} md={6} lg={3}>
              <SingleBook book={book} />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default BookList;
