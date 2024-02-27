import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/footer/Footer";
import SuperNavbar from "./components/navbar/Welcomenavbar";
import Home from "./pages/home/Home";
import Sobre from "./pages/sobre/Sobre";
import Contact from "./pages/contact/Contact";
import { AuthProvider } from "./contexts/AuthContext";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        {/* <SuperNavbar /> */}
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Home />} />
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
