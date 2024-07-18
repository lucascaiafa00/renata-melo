import './App.css';
import {Routes, Route} from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Inicio from "./pages/Inicio"
import Galeria from "./pages/Galeria"

function App() {
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Inicio/>}/>
        <Route path='/galeria/:id' element={<Galeria/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
