
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './pages/Partial/Header.js'
import Footer from './pages/Partial/Footer.js'
import './App.css'

function App() {
  
  return (
    
    <div className="App"> 
      <Header/>

      <Routes>
        <Route path="/" element={<Home id='body-content' />} />
        <Route path="/Projects" element={<Projects id='body-content' />} />
        <Route path="/About" element={<About id='body-content' />} />
      </Routes >

      <Footer />
    </div >
  );
}

export default App;
