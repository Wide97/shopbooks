import React, { Component } from "react";
import SingleBook from "./SingleBook"; 

class BookList extends Component {
  render() {
    const { books } = this.props; 

    return (
      <div className="book-list" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {books.map((book, index) => (
          <SingleBook key={index} book={book} /> 
        ))}
      </div>
    );
  }
}

export default BookList;