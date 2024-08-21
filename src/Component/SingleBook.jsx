import { Component } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import fantasy from '../Books/fantasy.json'

class SingleBook extends Component {
  render() {
    return (
      <Row className="justify-content-center">
        
          <Col
            key={this.props.libro.asin}
            xs={12}
            md={4}
            className="p-4 d-flex justify-content-center"
          >
            <Card style={{ width: "75%" }}>
              <Card.Img
                className="d-flex flex-column h-100"
                variant="top"
                src={this.props.libro.img}
                alt="book img"
              />
              <Card.Body>
                <Card.Title className="text-center pt-4 text-danger">
                  {this.props.libro.title}
                </Card.Title>
                <div className="mt-4 d-flex justify-content-center">
                  <Button variant="primary">{`$${this.props.libro.price}`}</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
      </Row>
    );
  }
}

export default SingleBook;
