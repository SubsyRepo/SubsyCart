import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Products from './components/products/products';

function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
        <Products />
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
