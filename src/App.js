import './App.css';
import Main from './pages/Main'
import Header from './pages/Header';
import Underheader from './pages/Underheader';
import Shipping from './pages/Shipping';
import Bestselling from './pages/Bestselling';

function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      <Underheader />
      <Shipping />
      <Bestselling />
    </div>
  );
}

export default App;
