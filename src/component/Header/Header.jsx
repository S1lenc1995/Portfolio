

import { NavLink } from 'react-router-dom'
import './Header.scss'


const Header = () =>{


    return(
        <header className="header">
            <div className="info">
                <div>Frontend Developer</div>
                <ul className="nav-bar">
                    <NavLink to="/" activeClassName="active" className='link-page'>
                    Main
                    </NavLink>
                    <NavLink to="/projects" activeClassName="active" className='link-page'>
                    <li>Projects</li>
                    </NavLink>
                    <NavLink to="/contacts" activeClassName="active" className='link-page'>
                    <li>Contacts</li>
                    </NavLink>
                </ul>
            </div>
        </header>
    )
}

export default Header