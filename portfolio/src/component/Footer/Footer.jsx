import { ReactComponent as Codewars } from './img/codewars.svg'
import { ReactComponent as GitHub } from './img/gitHub.svg'
import { ReactComponent as Instagram } from './img/instagram.svg'
import { ReactComponent as LinkedIn } from './img/linkedIn.svg'

import './Footer.scss'


const Footer = () => {

    return(
        <footer className='footer'>
            <div className='svg-block'>
            <Codewars/>
            <GitHub/>
            <Instagram/>
            <LinkedIn/>
            </div>
          <div className='copirate'>&#169; 2023</div>
        </footer>
    )
}

export default Footer