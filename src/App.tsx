import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import Contact from "./pages/contact/Contact";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./components/navbar/Navbar";
import ListaCategoria from "./components/categoria/listaCategoria/ListaCategoria";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import FormularioCategoria from "./components/categoria/formularioCategoria/FormularioCategoria";
import DeletarCategoria from "./components/categoria/deletarCategoria/DeletarCategoria";


function App() {
  return (
    <AuthProvider>
    <ToastContainer />
      <BrowserRouter>
        <Navbar />
        {/* <SuperNavbar /> */}
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categorias" element={<ListaCategoria />} />
            <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
            <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
            <Route path="/cadastrarCategoria" element={<FormularioCategoria />} />
            <Route path="/deletarTema/:id" element={<DeletarCategoria />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
