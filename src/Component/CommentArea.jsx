import React, {Component} from "react";
import { Spinner, Alert } from "react-bootstrap";

class CommentArea extends Component {
    state = {
        comments: [],
        loading: true,
        error: null,
        
    }

    fetchComments = async () => {
        try {
            setTimeout(() => {
                this.setState({
                    comments: [
                        'Questo è un libro fantastico!',
                        'Mi è piaciuto molto, lo consiglio!',
                        'Non è male, ma poteva essere migliore.'
                    ],
                    loading: false
                })
            }, 2000)
        } catch (error) {
            this.setState({error: 'Qualcosa è andato storto', loading: false})
        }
    }

    componentDidMount(){

        this.fetchComments();

    }

    render() {
        const { comments, loading, error } = this.state;
      
        return (
          <div>
            {loading && <Spinner animation="border" />}
            {error && <Alert variant="danger">{error}</Alert>}
            {!loading && !error && (
              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment}</li>
                ))}
              </ul>
            )}
          </div>
        );
      }
}

export default CommentArea