

import { NavLink } from 'react-router-dom'
import './Header.scss'


const Header = () =>{


    return(
        <header className="header">
            <div className="info">
                <div>Frontend Developer</div>
                <ul className="nav-bar">
                    <NavLink to="Portfolio/" activeClassName="active" className='link-page'>
                    Main
                    </NavLink>
                    <NavLink to="Portfolio/projects" activeClassName="active" className='link-page'>
                    <li>Projects</li>
                    </NavLink>
                    <NavLink to="Portfolio/contacts" activeClassName="active" className='link-page'>
                    <li>Contacts</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}

export default Header