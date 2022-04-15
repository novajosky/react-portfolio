import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoSubtitle from '../../assets/images/NovaLogo.png';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['M','i','c','h','a','e','l']
  const jobArray = [ 'N', 'o', 'v', 'a', 'j', 'o', 's', 'k', 'y',]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={10}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={17}
            />
            <br />
            <span className={`${letterClass} _18`}>S</span>
            <span className={`${letterClass} _19`}>o</span>
            <span className={`${letterClass} _20`}>f</span>
            <span className={`${letterClass} _21`}>t</span>
            <span className={`${letterClass} _22`}>w</span>
            <span className={`${letterClass} _23`}>a</span>
            <span className={`${letterClass} _24`}>r</span>
            <span className={`${letterClass} _25`}>e</span>
            <span className={`${letterClass} _26`}></span>
            <br />
            <span className={`${letterClass} _27`}>D</span>
            <span className={`${letterClass} _28`}>e</span>
            <span className={`${letterClass} _29`}>v</span>
            <span className={`${letterClass} _30`}>e</span>
            <span className={`${letterClass} _31`}>l</span>
            <span className={`${letterClass} _32`}>o</span>
            <span className={`${letterClass} _33`}>p</span>
            <span className={`${letterClass} _34`}>e</span>
            <span className={`${letterClass} _35`}>r</span>
          </h1>
            <img
              src={LogoSubtitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <br />
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home