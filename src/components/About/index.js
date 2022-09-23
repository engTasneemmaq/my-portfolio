import { useEffect, useState } from 'react'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>My name is Tasneem Maqableh ,from Jordan. I have a bachelor degree in Telecommunication and software Engineering and i'm Passionate about learning new technologies in web development filed ,
             and now i'm certified as javascript web developer from ASAC (ASAC linkedin ) .</p>
          <p>
            I'm a very ambitious full stack web developer looking for a role in an
            established IT company with the opportunity to work with the latest
            technologies on challenging and diverse projects.
          </p>
          <p align="LEFT">
            I'm quiet confident, naturally curious, and perpetually working on
            improving my chops one design problem at a time.
          </p>
          <p>🔧 Languages and Tools:</p>
     
<p align="left">

    <a href="https://www.w3.org/html/" target="_blank"> <img src="https://www.svgrepo.com/show/303205/html-5-logo.svg" alt="html5" width="40" height="40"/> </a>

    <a href="https://www.w3schools.com/css/" target="_blank"> <img src="https://www.svgrepo.com/show/303481/css-3-logo.svg" alt="css3" width="40" height="40"/> </a>

    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://www.svgrepo.com/show/303206/javascript-logo.svg" alt="javascript" width="40" height="40"/> </a>

    <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>

     <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="60" height="60"/> </a> 

 <a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a> 
 
    <a href="https://heroku.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/heroku/heroku-icon.svg" alt="heroku" width="40" height="40"/> </a>

    <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>

      <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="50" height="50"/> </a> 

     <a href="https://nodejs.org" target="_blank"> <img src="https://www.svgrepo.com/show/373929/node.svg" alt="nodejs" width="40" height="40"/> </a> 

     <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/></a>
  
     <a href="https://github.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/github/github-icon.svg" alt="git" width="40" height="40"/> </a>

 

</p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faNode} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
