import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import Cart from './pages/CartPage';
import Products from './pages/ProductPage';
import Error from './pages/ErrorPage';
import SingleProduct from './pages/SingleProductPage';
import PrivateRoute from './pages/PrivateRoute';
import Checkout from './pages/CheckoutPage';
import CartPage from './pages/CartPage';
function App() {
  return (
      <Router>
        <Navbar/>
        <Sidebar/>
        <Routes>
          <Route exact path='/' component={Home}  />
          <Route exact path='/about' component={About}  />
          <Route path='/cart' component={CartPage}  />
          <Route exact path='/products' component={Products}  />
          <Route path='*' component={Error} />
        </Routes>
        
        <Footer/>
      </Router>
  );
}

export default App;
