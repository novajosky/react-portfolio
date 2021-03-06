import './index.scss';
import { Link, NavLink } from 'react-router-dom';
import LogoS from '../../assets/images/M.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faHome, faPaperclip, faUser } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link className='logo' to='/'>
                <img src={LogoS} alt='logo' />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to='/'>
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to='/about'>
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to='/contact'>
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to='/portfolio'>
                    <FontAwesomeIcon icon={faPaperclip} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a 
                        href="https://www.linkedin.com/in/mike-novajosky/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li>
                    <a
                        href="https://github.com/novajosky"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;