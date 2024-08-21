
import './App.css';
import MyFooter from './Component/MyFooter';
import MyNav from './Component/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './Component/Welcome';
import SingleBook from './Component/SingleBook';
import books from './Books/fantasy.json';
// import AllTheBooks from './Component/AllTheBooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav/>
      </header>
      <main>
      <Welcome/>
      {/* <AllTheBooks/> */}
      <SingleBook book={books[0]}/>
    </main>
    <footer>
      <MyFooter/>
    </footer>
    </div>
    
  );
}

export default App;
