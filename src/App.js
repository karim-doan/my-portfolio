
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './pages/Partial/Header.js'
import Footer from './pages/Partial/Footer.js'
import './App.css'
import { path } from './enviroment.js'

function App() {
  
  return (
    
    <div className="App"> 
      <Header/>

      <Routes>
        <Route path={path.home} element={<Home id='body-content' />} />
        <Route path={path.projectPage} element={<Projects id='body-content' />} />
        <Route path={path.aboutPage} element={<About id='body-content' />} />
      </Routes >

      <Footer />
    </div >
  );
}

export default App;
