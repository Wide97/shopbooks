import { Alert } from "react-bootstrap";

function Welcome() {
    return (
        <>
      <Alert variant="dark" className="text-center mt-4 mx-5">
        <Alert.Heading>Welcome!</Alert.Heading>
        <p>
          Nice to see you here
        </p>
        <hr />
        <p className="mb-0">
          Choose and buy a book now!
        </p>
      </Alert>
      <h3 className="text-center my-4 text-danger">Benvenuto su Book Shop!</h3>
      </>
    );
  }

  export default Welcome