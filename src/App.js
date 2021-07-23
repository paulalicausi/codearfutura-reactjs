import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './componentes/navbar/navbar';
import Footer from './componentes/footer/footer';
import Home from './componentes/home/home';
import Contacto from './componentes/contacto/contacto';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return ( 
    <BrowserRouter>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/contacto">
            <Contacto />
          </Route>
        </Switch>
        <Footer />
    </BrowserRouter>    
  );
}

export default App;
