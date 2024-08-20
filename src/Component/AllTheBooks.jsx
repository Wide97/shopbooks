import { Card, Button, Row, Col } from "react-bootstrap";
import books from "../Books/horror.json";

function AllTheBooks() {
  return (
    <Row className="justify-content-center">
      {books.map((book) => (
        <Col
          key={book.asin}
          xs={3}
          md={4}
          className="p-4 d-flex justify-content-center"
        >
          <Card style={{ width: "75%" }}>
            <Card.Img
              className="d-flex flex-column h-100"
              variant="top"
              src={book.img}
              alt="book img"
            />
            <Card.Body>
              <Card.Title className="text-center pt-4 text-danger">
                {book.title}
              </Card.Title>
              <div className="mt-4 d-flex justify-content-center">
                <Button variant="primary">{`$${book.price}`}</Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default AllTheBooks;
