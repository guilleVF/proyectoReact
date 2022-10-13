import './App.css';
import ListaProductos from './components/ListaProductos';
import Home from './components/Home';
import ProductDetail from './components/ProductDetail';
import {BrowserRouter, Routes, Route} from "react-router-dom";  

function App() {

  return (
    <BrowserRouter>
      <div className="App">

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/tienda' element={<ListaProductos/>} />
          <Route path='/tienda/:id' element={<ProductDetail/>} />
        </Routes>

      </div>
    </BrowserRouter>
  );
}


export default App;
