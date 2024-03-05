import './App.css';
import Header from './Components/Header/Header';
import Cart from './Pages/Cart/Cart';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product/Product';

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>}/>
    </Routes>
    </Router>
    
    
    </div>
  );
}

export default App;
