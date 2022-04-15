
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import $ from 'jquery'

import backgroundHome from './images/backgroundHome.gif'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './pages/Partial/Footer.js'
import './App.css'

function App() {
  const [heightScreen, setHeightScreen] = useState(1000)
  const [inBlock, setInBlock] = useState(false)
  const [navActive, setNavActive] = useState(false)

  //handleMouseEnter handleMouseLeave btn-see__more, **hover event
  useEffect(() => {

    const handleMouseEnter = () => {
      $('#arrow-right').addClass('rotate-90-deg')
      return setInBlock(true)
    }

    const handleMouseLeave = () => {

      $('#arrow-right').addClass('release-rotate')
      $('#arrow-right').removeClass('rotate-90-deg')
      setTimeout(() => {
        $('#arrow-right').removeClass('release-rotate')
      }, 200);

      return setInBlock(false)
    }

    $('.btn-see__more')
      .on('mouseenter', () => handleMouseEnter())
      .on('mouseleave', () => handleMouseLeave()) 

  }, [inBlock])

  useEffect(() => {
    setHeightScreen(window.innerHeight)
  }, [heightScreen])

  useEffect(() => {
    const handleScroll = () => {
      const NavBarTag = heightScreen + 50

      if (window.scrollY >= NavBarTag) {
        setNavActive(true)
      }
      else if (window.scrollY < NavBarTag) {
        setNavActive(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  })

  //handle display navbar
  useEffect(() => {
    if (navActive) {
      $('#navbar-lists').addClass('hide')
      setTimeout(() => {
        // navRef.current.setAttribute('style', 'position: sticky; display: flex;')
        $('#navbar-lists').removeClass('hide')
        $('#navbar-lists').addClass('nav-lists--animated')
      }, 100);
    }
    else {
      $('#navbar-lists').removeClass('nav-lists--animated')

    }
  }, [navActive])

  return (
    <div className="App">
      <div className="Home format-center">
        <div className='homeBackground'
          style={{
            position: 'absolute', top: '0px',
            width: '100%', height: '100vh',
            backgroundImage: `url(${backgroundHome})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
        </div>
        <div className='format-center' style={{ position: 'relative', color: 'white', cursor: 'default', height: '100vh', }}>
          <div>
            <p className='text' style={{ fontWeight: '300', fontSize: '3.6rem', textAlign: 'center' }}>Hello, I'm <b>Kim</b>.</p>
            <p className='text' style={{ fontWeight: '300', fontSize: '3.6rem', textAlign: 'center' }}>I'm a web developer.</p>
            <a href='#body-content' className='format-center a-prevent-default'>
              <div className='btn-see__more d-flex' style={{
                textAlign: 'center',
                border: '3px solid',
                width: '200px',
                fontSize: '1.8rem',
                fontWeight: '300',
                padding: '10px',
                justifyContent: 'space-evenly',
                height: '40px',
              }}>
                <p>See more</p>
                <FontAwesomeIcon id='arrow-right' icon={faArrowRight} style={{ height: '100%' }} />
              </div>
            </a>
          </div>
        </div>
      </div >
      <nav id='navbar-lists' className="nav-lists  d-flex">
        <ul className="grid justify-content-between " style={{ width: '1200px' }} >
          <li >
            <Link className='header-page-link a-prevent-default' to='/'>Home</Link>
          </li>
          <li >
            <Link className='header-page-link a-prevent-default' to='/About'>About</Link>
            <Link className='header-page-link a-prevent-default' to='/Projects'>Projects</Link>
          </li>
        </ul>
      </nav>

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
