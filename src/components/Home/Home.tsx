import { useEffect } from 'react';
import { Link } from 'react-scroll'
import Typed from 'typed.js';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import img_banner from '../../assets/img/banner.png'
import Button from '../Button/Button'


const Home = () => {

    useEffect(() => {
        const typed = new Typed('.multiple-text', {
            strings: ['Portfólio'],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <section className='home'>
            <div className="home-content">
                <h3 className="animate__animated animate__fadeIn">Olá,</h3>
                <h1 className="animate__animated animate__fadeInLeft">Seja bem vindo</h1>
                <h3 className="animate__animated animate__fadeInLeft">ao meu <span className="multiple-text"></span></h3>
                <p className="animate__animated animate__fadeInUp">Explore meu portfólio e projetos para descobrir um universo de design, arte e inovação.
                    Cada trabalho é o resultado de dedicação, criatividade e atenção aos detalhes.</p>
                <div className="social-media animate__animated animate__fadeInUp">
                    <a href="https://www.linkedin.com/in/vitor-almeida-bb7934236/" target="_blank" ><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/Vitor2008" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.instagram.com/vg.almeida_22/" target="_blank"><FontAwesomeIcon icon={faInstagram} /> </a>
                </div>
                <Link className='animate__animated animate__fadeInUp' to='contact' smooth={true} offset={-260} duration={500}>
                    <Button text='Baixar Currículo'></Button>
                </Link>
            </div>
            <div className='home-img animate__animated animate__fadeIn'>
                <img src={img_banner} alt='banner portfolio' />
            </div>
        </section>
    )
}

export default Home