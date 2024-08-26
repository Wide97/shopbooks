import "./App.css";
import MyFooter from "./Component/MyFooter";
import MyNav from "./Component/MyNav";
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./Component/Welcome";
import books from "./Books/fantasy.json";
import BookList from "./Component/BookList";
import { Col, Row } from "react-bootstrap";
import CommentArea from "./Component/CommentArea";
import { Component } from "react";
// import AllTheBooks from './Component/AllTheBooks';

class App extends Component {
  state = {
    selectedBookAsin: null,
  };

  changeSelectedBook = (asin) => {
    this.setState({
      selectedBookAsin: asin,
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MyNav />
        </header>
        <main>
          <Welcome />
          <Row>
            <Col xs={12} md={8} lg={6}>
              {/* <AllTheBooks/> */}
              <BookList
                books={books}
                onBookSelected={this.changeSelectedBook}
              />
            </Col>
            <Col xs={12} md={4}>
              <CommentArea bookId={this.state.selectedBookAsin} />
            </Col>
          </Row>
        </main>
        <footer>
          <MyFooter />
        </footer>
      </div>
    );
  }
}

export default App;
