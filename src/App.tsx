import './App.css';
import Cart from './Pages/Cart/Cart';
import HomePage from './Pages/Home/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Product from './Pages/Product/Product';
import LoginPage from './Pages/LoginPage/LoginPage';

function App() {
  return (
    <div className="App">
    <Router>
    <Routes>
    <Route path='/' element={<LoginPage/>}/>
      <Route path='/HomePage' element={<HomePage/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Product' element={<Product/>}/>
    </Routes>
    </Router>
    
    
    </div>
  );
}

export default App;
