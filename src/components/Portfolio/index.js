import { useEffect, useState, React } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';

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
                    <div className="card-container">
                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">MatchPlay</h2>
                                <p className="card-text">A MERN-stack web application that allows users to 
                                    share and connect with other like-minded golfers.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a className="deployed-link" target="_blank" href="https://matchplaygolf.herokuapp.com/"><FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" /></a><br/>
                                <a className="github-link" target="_blank" href="https://github.com/novajosky/MatchPlay"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Hidden Gems</h2>
                                <p className="card-text">A full-stack Django web application that uses a mapbox API to alow users to share favorite spots
                                , photos and reviews for locations on or off grid using coordinate data.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a className="deployed-link" target="_blank" href="https://hidden-gems-usa.herokuapp.com/"><FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" /></a><br/>
                                <a className="github-link" target="_blank" href="https://github.com/novajosky/Hidden-Gems"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Employee Software</h2>
                                <p className="card-text">A MEN stack CRUD software tracking application that includes OAuth functionality.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a className="deployed-link" target="_blank" href="https://employee-software-sei.herokuapp.com/"><FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" /></a><br/>
                                <a className="github-link" target="_blank" href="https://github.com/novajosky/employee-software"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <h2 className="card-title">Hangman</h2>
                                <p className="card-text">A game of hangman built using HTML, CSS and Javascript.
                                </p>
                            </div>
                            <div className="card-footer">
                                <a className="deployed-link" target="_blank" href="https://novajosky.github.io/hangman/"><FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" /></a><br/>
                                <a className="github-link" target="_blank" href="https://github.com/novajosky/hangman"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Portfolio
