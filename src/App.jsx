import './App.scss';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div className="App">
      <div className="container">
          <Header/>
          <Home/>
      </div>
    </div>
  );
}

export default App;
