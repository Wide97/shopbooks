import { Component } from "react";
import SingleBook from "./SingleBook";
import { Col, Form, Row } from "react-bootstrap";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  handleBookClick = (book) => {
    this.props.onBookSelected(book.asin); // Passiamo l'ASIN al componente principale
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mb-3">
          <Col xs={12} md={6} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) =>
                  this.setState({ searchQuery: e.target.value })
                }
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="g-2 mt-3">
          {this.props.books
            .filter((b) =>
              b.title.toLowerCase().includes(this.state.searchQuery)
            )
            .map((b) => (
              <Col xs={12} md={4} key={b.asin}>
                <div onClick={() => this.handleBookClick(b)}>
                  <SingleBook book={b} />
                </div>
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
