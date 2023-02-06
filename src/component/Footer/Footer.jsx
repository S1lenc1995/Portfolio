import { ReactComponent as Codewars } from './img/codewars.svg'
import { ReactComponent as GitHub } from './img/gitHub.svg'
import { ReactComponent as Instagram } from './img/instagram.svg'
import { ReactComponent as LinkedIn } from './img/linkedIn.svg'

import './Footer.scss'


const Footer = () => {

    return(
        <footer className='footer'>
            <div className='svg-block'>
            <Codewars className="footer-icon"  onClick={() => window.open('https://www.codewars.com/users/underwater349')}/>
            <GitHub className="footer-icon" onClick={() => window.open('https://github.com/S1lenc1995')} />
            <Instagram className="footer-icon" onClick={() => window.open('https://www.instagram.com/this_is_s1lenc/')}/>
            <LinkedIn className="footer-icon" onClick={() => window.open('https://www.linkedin.com/in/bohdan-kletskyi-22230b261/')}/>
            </div>
          <div className='copirate'>&#169; 2023</div>
        </footer>
    )
}

export default Footer