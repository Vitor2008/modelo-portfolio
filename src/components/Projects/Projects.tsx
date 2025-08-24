import './Projects.css';
import Button from '../Button/Button'
import react_icon from '../../assets/img/icons/React-icon.svg'
import typescript from '../../assets/img/icons/Typescript_logo_2020.svg'
import html from '../../assets/img/icons/html.svg'
import Css from '../../assets/img/icons/css.svg'
import JavaScript from '../../assets/img/icons/JavaScript.svg'
import vsCode from '../../assets/img/icons/vscode-icon.svg'
import vite from '../../assets/img/icons/vite.svg'
import visualStudio from '../../assets/img/icons/Visual_Studio_Logo.svg'
import csharp from '../../assets/img/icons/csharp.svg'
import dotNet from '../../assets/img/icons/dotnet.svg'
import mySql from '../../assets/img/icons/mysql.svg'
import node from '../../assets/img/icons/Node.js_logo.svg'
import bootstrap from '../../assets/img/icons/Bootstrap_logo.svg'


const Projects = () => {
    return (
        <div className='projects'>
            <div className="container-projects animate__animated animate__fadeIn">

                <div className="img-port easedelivery">
                    <div className="overlay">
                        <h1 className="title-project">
                            Easy Delivery
                        </h1>
                        <p>Plataforma de delivery com funcionalidades avançadas e uma interface intuitiva,
                            projetada para revolucionar a maneira de gerenciar pedidos.
                        </p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="NodeJs"
                                        data-social="NodeJs"
                                    >
                                        <div className="filled"></div>
                                        <img src={node} alt='logo Node.Js' />
                                    </a>
                                    <div className="tooltip">Node.Js</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="JavaScript"
                                        data-social="JavaScript"
                                    >
                                        <div className="filled"></div>
                                        <img src={JavaScript} alt='logo JavaScript' />
                                    </a>
                                    <div className="tooltip">JavaScript</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="Bootstrap"
                                        data-social="Bootstrap"
                                    >
                                        <div className="filled"></div>
                                        <img src={bootstrap} alt='logo Bootstrap' />
                                    </a>
                                    <div className="tooltip">Bootstrap</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="MySql"
                                        data-social="MySql"
                                    >
                                        <div className="filled"></div>
                                        <img src={mySql} alt='logo mysql' />
                                    </a>
                                    <div className="tooltip">MySql</div>
                                </li>

                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto' onClick={() => window.open('https://easedelivery.com.br', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port xadrez">
                    <div className="overlay">
                        <h1 className="title-project">
                            Jogo de Xadrez
                        </h1>
                        <p>Aplicação de terminal para simulação de partidas de xadrez,
                            com regras oficiais e movimentação completa das peças.</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="CSharp"
                                        data-social="CSharp"
                                    >
                                        <div className="filled"></div>
                                        <img src={csharp} alt='logo csharp' />
                                    </a>
                                    <div className="tooltip">CSharp</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="DotNet"
                                        data-social="DotNet"
                                    >
                                        <div className="filled"></div>
                                        <img src={dotNet} alt='logo dotnet' />
                                    </a>
                                    <div className="tooltip">DotNet</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="MySql"
                                        data-social="MySql"
                                    >
                                        <div className="filled"></div>
                                        <img src={mySql} alt='logo mysql' />
                                    </a>
                                    <div className="tooltip">MySql</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="VisualStudio"
                                        data-social="VisualStudio"
                                    >
                                        <div className="filled"></div>
                                        <img src={visualStudio} alt='logo visual studio' />
                                    </a>
                                    <div className="tooltip">Visual Studio</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/jogo-de-xadrez-console', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port uselavie">
                    <div className="overlay">
                        <h1 className="title-project">
                            Use Lavie
                        </h1>
                        <p>Loja virtual com um design moderno e sistema de carrinho em que o pedido chega diretamente no WhatsApp da loja.</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="Html"
                                        data-social="Html"
                                    >
                                        <div className="filled"></div>
                                        <img src={html} alt='logo html' />
                                    </a>
                                    <div className="tooltip">HTML</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="Css"
                                        data-social="Css"
                                    >
                                        <div className="filled"></div>
                                        <img src={Css} alt='logo css' />
                                    </a>
                                    <div className="tooltip">CSS</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="JavaScript"
                                        data-social="JavaScript"
                                    >
                                        <div className="filled"></div>
                                        <img src={JavaScript} alt='logo JavaScript' />
                                    </a>
                                    <div className="tooltip">JavaScript</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="vsCode"
                                        data-social="vsCode"
                                    >
                                        <div className="filled"></div>
                                        <img src={vsCode} alt='logo vsCode' />
                                    </a>
                                    <div className="tooltip">VSCode</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto' onClick={() => window.open('https://uselavieapp.netlify.app/', '_blank')}></Button>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/uselavie', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port kinksburguer">
                    <div className="overlay">
                        <h1 className="title-project">
                            Restaurante
                        </h1>
                        <p>Web site de um restaurante que convida os visitantes a vivenciarem uma
                            experiência gastronômica única.</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="Html"
                                        data-social="Html"
                                    >
                                        <div className="filled"></div>
                                        <img src={html} alt='logo html' />
                                    </a>
                                    <div className="tooltip">HTML</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="Css"
                                        data-social="Css"
                                    >
                                        <div className="filled"></div>
                                        <img src={Css} alt='logo css' />
                                    </a>
                                    <div className="tooltip">CSS</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="JavaScript"
                                        data-social="JavaScript"
                                    >
                                        <div className="filled"></div>
                                        <img src={JavaScript} alt='logo JavaScript' />
                                    </a>
                                    <div className="tooltip">JavaScript</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="vsCode"
                                        data-social="vsCode"
                                    >
                                        <div className="filled"></div>
                                        <img src={vsCode} alt='logo vsCode' />
                                    </a>
                                    <div className="tooltip">VSCode</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto' onClick={() => window.open('https://foodrestaurante.netlify.app/', '_blank')}></Button>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/Food-Restaurante', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port menuone">
                    <div className="overlay">
                        <h1 className="title-project">
                            Cardápio Online
                        </h1>
                        <p>Possibilidade de realizar pedidos com facilidade,
                            tudo a partir do conforto do seu dispositivo.</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="Html"
                                        data-social="Html"
                                    >
                                        <div className="filled"></div>
                                        <img src={html} alt='logo html' />
                                    </a>
                                    <div className="tooltip">HTML</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="Css"
                                        data-social="Css"
                                    >
                                        <div className="filled"></div>
                                        <img src={Css} alt='logo css' />
                                    </a>
                                    <div className="tooltip">CSS</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="JavaScript"
                                        data-social="JavaScript"
                                    >
                                        <div className="filled"></div>
                                        <img src={JavaScript} alt='logo JavaScript' />
                                    </a>
                                    <div className="tooltip">JavaScript</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="vsCode"
                                        data-social="vsCode"
                                    >
                                        <div className="filled"></div>
                                        <img src={vsCode} alt='logo vsCode' />
                                    </a>
                                    <div className="tooltip">VSCode</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto' onClick={() => window.open('https://cardapioonlinefoods.netlify.app/', '_blank')}></Button>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/Card-pio-Online', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port segurancatrabalho">
                    <div className="overlay">
                        <h1 className="title-project">
                            Landing page
                        </h1>
                        <p>landing page focada em consultoria especializada em segurança do trabalho.
                            Apresenta informações sobre serviços oferecidos, benefícios da consultoria e muito mais.</p>

                        <div className='tech'>
                            <ul className="example-2">

                                <li className="icon-content">
                                    <a
                                        aria-label="React"
                                        data-social="React"
                                    >
                                        <div className="filled"></div>
                                        <img src={react_icon} alt='logo react' />
                                    </a>
                                    <div className="tooltip">React</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="TypeScrip"
                                        data-social="TypeScrip"
                                    >
                                        <div className="filled"></div>
                                        <img src={typescript} alt='logo typescript' />
                                    </a>
                                    <div className="tooltip">TypeScrip</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="Vs"
                                        data-social="Vite"
                                    >
                                        <div className="filled"></div>
                                        <img src={vite} alt='logo vite' />
                                    </a>
                                    <div className="tooltip">Vite</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="vsCode"
                                        data-social="vsCode"
                                    >
                                        <div className="filled"></div>
                                        <img src={vsCode} alt='logo vsCode' />
                                    </a>
                                    <div className="tooltip">VSCode</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto' onClick={() => window.open('https://landing-page-sg.vercel.app/', '_blank')}></Button>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/landing-page-sg', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port edusity">
                    <div className="overlay">
                        <h1 className="title-project">
                            Landing page
                        </h1>
                        <p>Landing page institucional para uma universidade, com o objetivo de
                            apresentar de forma clara e atrativa as principais informações sobre
                            a instituição, suas características únicas e opções de contato.</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="React"
                                        data-social="React"
                                    >
                                        <div className="filled"></div>
                                        <img src={react_icon} alt='logo react' />
                                    </a>
                                    <div className="tooltip">React</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="TypeScrip"
                                        data-social="TypeScrip"
                                    >
                                        <div className="filled"></div>
                                        <img src={typescript} alt='logo typescript' />
                                    </a>
                                    <div className="tooltip">TypeScrip</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="Vs"
                                        data-social="Vite"
                                    >
                                        <div className="filled"></div>
                                        <img src={vite} alt='logo vite' />
                                    </a>
                                    <div className="tooltip">Vite</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="vsCode"
                                        data-social="vsCode"
                                    >
                                        <div className="filled"></div>
                                        <img src={vsCode} alt='logo vsCode' />
                                    </a>
                                    <div className="tooltip">VSCode</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto' onClick={() => window.open('https://landing-page-react-gqqz.vercel.app/', '_blank')}></Button>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/landing-page-react', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port crud">
                    <div className="overlay">
                        <h1 className="title-project">
                            Crud MVC
                        </h1>
                        <p>Aplicação desenvolvida com foco em orientação a objetos e boas práticas de arquitetura,
                            utilizando o padrão MVC</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="CSharp"
                                        data-social="CSharp"
                                    >
                                        <div className="filled"></div>
                                        <img src={csharp} alt='logo csharp' />
                                    </a>
                                    <div className="tooltip">CSharp</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="DotNet"
                                        data-social="DotNet"
                                    >
                                        <div className="filled"></div>
                                        <img src={dotNet} alt='logo dotnet' />
                                    </a>
                                    <div className="tooltip">DotNet</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="MySql"
                                        data-social="MySql"
                                    >
                                        <div className="filled"></div>
                                        <img src={mySql} alt='logo mysql' />
                                    </a>
                                    <div className="tooltip">MySql</div>
                                </li>
                                <li className="icon-content">
                                    <a
                                        aria-label="VisualStudio"
                                        data-social="VisualStudio"
                                    >
                                        <div className="filled"></div>
                                        <img src={visualStudio} alt='logo visual studio' />
                                    </a>
                                    <div className="tooltip">Visual Studio</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/sales-web-mvc', '_blank')}></Button>
                        </div>
                    </div>
                </div>

                <div className="img-port ecommerce">
                    <div className="overlay">
                        <h1 className="title-project">
                            loja online
                        </h1>
                        <p>Interface de usuário amigável que permite aos visitantes
                            navegar por uma variedade de produtos.</p>

                        <div className='tech'>
                            <ul className="example-2">
                                <li className="icon-content">
                                    <a
                                        aria-label="Html"
                                        data-social="Html"
                                    >
                                        <div className="filled"></div>
                                        <img src={html} alt='logo html' />
                                    </a>
                                    <div className="tooltip">HTML</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="Css"
                                        data-social="Css"
                                    >
                                        <div className="filled"></div>
                                        <img src={Css} alt='logo css' />
                                    </a>
                                    <div className="tooltip">CSS</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="JavaScript"
                                        data-social="JavaScript"
                                    >
                                        <div className="filled"></div>
                                        <img src={JavaScript} alt='logo JavaScript' />
                                    </a>
                                    <div className="tooltip">JavaScript</div>
                                </li>

                                <li className="icon-content">
                                    <a
                                        aria-label="vsCode"
                                        data-social="vsCode"
                                    >
                                        <div className="filled"></div>
                                        <img src={vsCode} alt='logo vsCode' />
                                    </a>
                                    <div className="tooltip">VSCode</div>
                                </li>
                            </ul>
                        </div>

                        <div className='footer-project'>
                            <Button text='Ver projeto' onClick={() => window.open('https://starlit-chebakia-62376a.netlify.app/', '_blank')}></Button>
                            <Button text='Ver Repositório' onClick={() => window.open('https://github.com/Vitor2008/Loja-Online', '_blank')}></Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;