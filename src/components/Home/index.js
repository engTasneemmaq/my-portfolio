import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'


import { useRef } from 'react'

import work3 from '../../assets/images/work3.png'

const Home = () => {
  const bgRef = useRef()
  const solidLogoRef = useRef()
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['T', 'A', 'S', 'N', 'E', 'E', 'M']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

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
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
          <br></br>
        
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Full Stack Web Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"   
        ref={solidLogoRef}
        src={work3}
        alt="JavaScript,  Developer"
      />

    </div>
      

      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
