import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const refForm = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't']}
              idx={15}
            />
          </h1>
          <p>
            I am interested in any opportunity that allows me to work with others and collaborate
            on building web applications to enrich the lives of users of any project I work on.
            If you have any requests, feel free to contact me through email,
            phone or Linkedin
          </p>
        </div>
        <div className="info-map">
          Michael Novajosky
          <br />
          Renton, WA <br />
          425-442-9166 <br />
          <a href={"mailto:mikenovajosky@gmail.com"}>MikeNovajosky@gmail.com</a>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact