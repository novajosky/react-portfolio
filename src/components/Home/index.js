import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import LogoTitle from '../../assets/images/logo-s.png'
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
              idx={11}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
            <br />
            <span className={`${letterClass} _11`}>S</span>
            <span className={`${letterClass} _12`}>o</span>
            <span className={`${letterClass} _13`}>f</span>
            <span className={`${letterClass} _14`}>t</span>
            <span className={`${letterClass} _15`}>w</span>
            <span className={`${letterClass} _16`}>a</span>
            <span className={`${letterClass} _17`}>r</span>
            <span className={`${letterClass} _18`}>e</span>
            <span className={`${letterClass} _19`}></span>
            <span className={`${letterClass} _20`}>D</span>
            <span className={`${letterClass} _21`}>e</span>
            <span className={`${letterClass} _22`}>v</span>
            <span className={`${letterClass} _23`}>e</span>
            <span className={`${letterClass} _24`}>l</span>
            <span className={`${letterClass} _25`}>o</span>
            <span className={`${letterClass} _26`}>p</span>
            <span className={`${letterClass} _27`}>e</span>
            <span className={`${letterClass} _28`}>r</span>
          </h1>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
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