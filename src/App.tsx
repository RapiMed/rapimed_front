import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/Footer'
import SuperNavbar from './components/navbar/SuperNavbar'
import Home from './pages/home/Home'
import Sobre from './pages/sobre/Sobre'
import Contact from './pages/contact/Contact'

function App() {
 return (
    <>
      <BrowserRouter>
      <SuperNavbar/>
      <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<Sobre />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contato" element={<Contact/>} />
            </Routes>
      </div>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
