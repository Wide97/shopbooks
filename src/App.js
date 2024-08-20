
import './App.css';
import MyFooter from './Component/MyFooter';
import MyNav from './Component/MyNav';
import 'bootstrap/dist/css/bootstrap.min.css'
import Welcome from './Component/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNav/>
      </header>
      <main>
      <Welcome/>
    </main>
    <footer>
      <MyFooter/>
    </footer>
    </div>
    
  );
}

export default App;
