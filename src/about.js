import React from 'react'
//import ReactPlayer from 'react-player'
import profilpic from '../src/profilpic.png';
import './shared.css';

function About() {
    return (
        <div className='container about'>
            <div className="column">
                <img className="profilpic" src={profilpic} alt="profile" />
            </div>
            <div className="column">
                <section class="viewport-header2">
                    <p>Hi... I'm Mandy, a student at&nbsp;
                    <a className="App-link"
                            href="https://techgrounds.nl"
                            target="_blank"
                            rel="">Techgrounds Amsterdam.</a>
                     &nbsp;Currently I'm learning how to become a jr. frontend developer.
                    In only 3 month's I got to know the basics of:html/css sass bootstrap javascript react and softskills.
                    I'm looking forward to put my newly gained skills into practice as an employe in IT and keep on developing.
                    So, I'm open for business. If you are to, contact me by e-mail:fullstackmandy@gmail.com.</p>
                </section>
            </div>
        </div>
    )
}


export default About;