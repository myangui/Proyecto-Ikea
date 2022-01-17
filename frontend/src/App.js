import './App.css';
import Home from './components/Home';
import Tienda from './components/cliente/Tienda';
import Categoria from './components/cliente/Categoria';
import Producto from './components/cliente/Producto';
import Carrito from './components/cliente/Carrito';
import HomeAdmin from './components/admin/HomeAdmin';
import EditarListaCategorias from './components/admin/EditarListaCategorias';
import EditarCatalogo from './components/admin/EditarCatalogo';
import InfoTiendas from './components/admin/InfoTiendas';
import InfoTienda from './components/admin/InfoTienda';
import EditarMenu from './components/admin/EditarMenu';
//import oferta??
import VerFacturas from './components/admin/VerFacturas';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
       <Router>
      <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tienda" exact component={Tienda} />
            <Route path="/categoria" exact component={Categoria} />
            <Route path="/producto" exact component={Producto} />
            <Route path="/carrito" exact component={Carrito} />
            <Route path="/homeadmin" exact component={HomeAdmin} />
            <Route path="/listacategorias" exact component={EditarListaCategorias} />
            <Route path="/listacatalogos" exact component={EditarCatalogo} />
            <Route path="/infotiendas" exact component={InfoTiendas} />
            <Route path="/infotienda" exact component={InfoTienda} />
            <Route path="/menutienda" exact component={EditarMenu} />
            <Route path="/facturastienda" exact component={VerFacturas} />
          </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
