import React from 'react'
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
                        <a target="_blank" href="https://matchplaygolf.herokuapp.com/"><span class="link-effect">
                                Deployed Version</span></a>
                        <a className="link-gh" target="_blank" href="https://github.com/novajosky/MatchPlay"><i
                                class="fa fa-github"></i>Source Code</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
