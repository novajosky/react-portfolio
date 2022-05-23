import React from 'react'
import { useEffect, useState } from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetters from '../AnimatedLetters';

import './index.scss'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        return setTimeout(() => {
        setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
    return (
        <>
            <div className= "container portfolio-page">
                <div className= "text-zone">
                <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'o', 'r', 't', 'f', 'o', 'l', 'i', 'o']}
              idx={15}
            />
          </h1>
                    <div className="card-body">
                        <h5 className="card-title">MatchPlay</h5>
                        <p className="card-text">A MERN-stack web application that allows users to 
                            share and connect with other like-minded golfers.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a className="deployed-link" target="_blank" href="https://matchplaygolf.herokuapp.com/"><FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" /></a>
                        <br />
                        <a className="github-link" target="_blank" href="https://github.com/novajosky/MatchPlay"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio
