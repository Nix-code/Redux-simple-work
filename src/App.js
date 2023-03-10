
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import Header from './containers/Header';
// import SearchBar from './containers/SearchBar';
function App() {
  return (
    <div className='App'>
      <Router>
    
      <Header />
     
      <Routes>
      {/* Switch=> Routes , use component as < /> */}
      {/* <Route path = "/product/:productId" exact component = {ProductDetail} /> */}
          <Route path = "/" exact element = {<ProductListing/>} />
          <Route path = "/product/:productId" exact element = {<ProductDetail/>} />
          <Route>404 Not Found !</Route>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
