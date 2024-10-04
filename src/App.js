import './App.css';
import Main from './components/Main'
import Header from './components/Header';
import Underheader from './components/Underheader';
import Shipping from './components/Shipping';
import Bestselling from './components/Bestselling';
import Browsing from './components/Browsing';
import Productlist from './components/Productlist';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Main />
      <Header />
      <Underheader />
      <Shipping />
      <Bestselling />
      <Browsing />
      <Productlist />
      <Footer />
    </div>
  );
}

export default App;
