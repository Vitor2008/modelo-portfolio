import './Projects.css';
import Button from '../Button/Button'
import react_icon from '../../assets/img/icons/React-icon.svg'
import typescript from '../../assets/img/icons/Typescript_logo_2020.svg'


const Projects = () => {
    return (
        <div className='projects'>
            <div className="container-projects animate__animated animate__fadeIn">

                <div className="img-port site1">
                    <div className="overlay">
                        <h1 className="title-project">
                            Projeto
                        </h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Libero provident nihil dicta iste dignissimos assumenda eos
                            culpa aut doloremque ullam ut omnis, excepturi laborum vero dolorem
                            voluptas adipisci aliquid atque?</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="DotNet"
                                        data-social="DotNet"
                                    >
                                        <div className="filled"></div>

                                        <span>.NET</span>
                                    </a>
                                    <div className="tooltip">dotNet</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="CSharp"
                                        data-social="CSharp"
                                    >
                                        <div className="filled"></div>
                                        <span>C#</span>
                                    </a>
                                    <div className="tooltip">CSharp</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="TypeScrip"
                                        data-social="TypeScrip"
                                    >
                                        <div className="filled"></div>
                                        <img src={typescript} alt='typescript' />
                                    </a>
                                    <div className="tooltip">TypeScrip</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="React"
                                        data-social="React"
                                    >
                                        <div className="filled"></div>
                                        <img src={react_icon} alt='react' />
                                    </a>
                                    <div className="tooltip">React</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto'></Button>
                            <Button text='Ver Repositório'></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port site2">
                    <div className="overlay">
                        <h1 className="title-project">
                            Projeto
                        </h1>
                    </div>
                </div>

                <div className="img-port site3">
                    <div className="overlay">
                        <h1 className="title-project">
                            Projeto
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;