import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ListaProductos from './components/ListaProductos';
import NavBar from './components/NavBar'
import ProductCard from './components/ProductCard';

function App() {

  return (
    <div className="App">
      
      <header>
        <NavBar></NavBar>
      </header>
      <ItemListContainer greeting="Bienvenido a Montevideo Wrapping"></ItemListContainer>
      <ListaProductos></ListaProductos>

    </div>
  );
}


export default App;
