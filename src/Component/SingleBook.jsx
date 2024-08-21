import { Component } from "react";
import { Card, Button } from "react-bootstrap";



class SingleBook extends Component {
    render() {
        const { book } = this.props; 

        return (
            <Card style={{ width: '15%' }}>
                <Card.Img variant="top" src={book.img} alt={book.title} />
                <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Button variant="primary">{book.price}</Button>
                </Card.Body>
            </Card>
        );
    }
}

export default SingleBook;
  


