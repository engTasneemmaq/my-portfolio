import { useEffect,useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faGithub,
  faHtml5,
  faJsSquare,
  faNode,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import {
  
   faWhatsapp,
} from '@fortawesome/free-brands-svg-icons'
import { faAirFreshener, faGamepad, faList, faPlane, faStore } from '@fortawesome/free-solid-svg-icons'

const Work = () => {
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
              strArray={['M', 'y',' ', 'P', 'r', 'o', ' j', 'e', 'c','t']}
              idx={15}
            />
          </h1>
              <h2 align="left">
              <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'h','a', 't', ' ', 'A', 'p', 'p']}
              idx={15}
            />
          
              <a href="https://632ac163fc296b3b252f0614--stalwart-puppy-9678a1.netlify.app/" target="_blank"> 
              <FontAwesomeIcon icon= {faWhatsapp} color="#ADFF2F" fontSize={30} /> </a>
              </h2>
              <h2 align="left">
              <AnimatedLetters
              letterClass={letterClass}
              strArray={['M', 'e','m', 'o', 'r', 'y', ' ', 'G','a','m','e']}
              idx={15}
            />
          
              <a href="https://632ac2dc1c3e813f7aa217f6--rainbow-griffin-9d3429.netlify.app/" target="_blank">
                 
              <FontAwesomeIcon icon= {faGamepad} color="#FF1493" fontSize={30} /> </a>
              </h2>
              <h2 align="left">
              <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'i','r', 'l', 'i', 'n', 'e',' ','S','y','s','t','e','m']}
              idx={15}
            />
              <a href="https://github.com/engTasneemmaq/airline-system" target="_blank">    
              <FontAwesomeIcon icon= {faPlane} color="#00BFFF" fontSize={30} /> </a>
              </h2>
              <h2 align="left">
              <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 't','o', 'r', 'e',' ','F','r','o','n','t']}
              idx={15}
            />
              <a href="https://631efcd8aef380775ab19b1e--precious-figolla-ebec34.netlify.app/" target="_blank">    
              <FontAwesomeIcon icon= { faStore} color="#4B0082" fontSize={30} /> </a>
              </h2>
              <h2 align="left">
              <AnimatedLetters
              letterClass={letterClass}
              strArray={['T', 'o','D', 'o', ' ', 'A', 'p','p']}
              idx={15}
            />
              <a href="https://630e68fb27a83a0095544e86--loquacious-dragon-11d290.netlify.app/" target="_blank">    
              <FontAwesomeIcon icon= {faList} color="#FFA500" fontSize={30} /> </a>
              </h2>
        </div>
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
              <FontAwesomeIcon icon={faGithub} color="#000000" />
            </div>
          
          </div>
        </div>
    
      <Loader type="pacman" />
    </>
  )
}

export default Work;

