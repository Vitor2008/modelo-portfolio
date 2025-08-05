import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCode } from '@fortawesome/free-solid-svg-icons'
import Button from '../Button/Button'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setSticky(window.scrollY > 50);
        })
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <nav className={`site-container ${sticky ? 'dark-nav' : ''}`}>
            <div className='logo'>
                <FontAwesomeIcon className='logo-icon' icon={faCode} />
                <div className='text-logo'>
                    <h1>Portfólio Vitor Almeida</h1>
                </div>
            </div>
            <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
                <li><Link className='menu-link' to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link className='menu-link' to='about' smooth={true} offset={-360} duration={500}>Sobre</Link></li>
                <li><Link className='menu-link' to='skills' smooth={true} offset={-160} duration={500}>Skills</Link></li>
                <li><Link className='menu-link' to='services' smooth={true} offset={-260} duration={500}>Serviços</Link></li>
                <li><Link className='menu-link' to='projects' smooth={true} offset={-260} duration={500}>Projetos</Link></li>
                <li>
                    <Link to='contact' smooth={true} offset={-260} duration={500}>
                       <Button text='Contato'></Button>
                    </Link>
                </li>
            </ul>
            <FontAwesomeIcon icon={faBars} className='menu-icon' onClick={toggleMenu} />
        </nav>
    )
}

export default Navbar