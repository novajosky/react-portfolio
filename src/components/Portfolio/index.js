import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';

import './index.scss'

export default function Portfolio() {
  return (
    <div className= "container portfolio">
        <div className='row g-3'>
            <div className="col-14 col-md-6 col-lg-4">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">MatchPlay</h5>
                        <p className="card-text">A MERN-stack web application that allows users to 
                            share and connect with other like-minded golfers.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a className="deployed-link" target="_blank" href="https://matchplaygolf.herokuapp.com/"><FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" /></a>
                        <a className="github-link" target="_blank" href="https://github.com/novajosky/MatchPlay"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" /></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
