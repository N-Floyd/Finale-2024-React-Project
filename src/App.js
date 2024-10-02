import './App.css';
import Main from './pages/Main'
import Header from './pages/Header';
import Underheader from './pages/Underheader';
import Shipping from './pages/Shipping';
import Bestselling from './pages/Bestselling';
import Browsing from './pages/Browsing'

function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      <Underheader />
      <Shipping />
      <Bestselling />
      <Browsing />
    </div>
  );
}

export default App;
