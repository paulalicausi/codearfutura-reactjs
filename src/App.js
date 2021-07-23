import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './componentes/navbar/navbar';
import Footer from './componentes/footer/footer';
import Home from './componentes/home/home';

function App() {
  return ( 
    <>
        <Navbar />
        <Home />
        <Footer />
    </>
  );
}

export default App;
