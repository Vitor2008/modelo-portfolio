import './About.css'
import img_about from '../../assets/img/banner.png'

const About = () => {
    return (
        <div className='about'>
            <div className='about-img'>
                <img src={img_about} width={450} alt='about img' />
            </div>
            <div className='about-content'>
                <h3>SOBRE MIM</h3>
                <h2>Desenvolvedor FullStack</h2>
                <p>Sou um desenvolvedor FullStack com experiência em tecnologias modernas e um perfil 
                voltado à criação de soluções eficientes, escaláveis e centradas no usuário.</p>
                <p>Atuo com foco em desenvolvimento web, criando soluções escaláveis e sustentáveis, 
                com atenção especial à arquitetura de sistemas e à construção de APIs robustas e bem estruturadas.</p>
                <p>Meu objetivo é crescer como profissional, contribuindo com projetos inovadores e 
                colaborando com equipes que valorizam a tecnologia como motor de transformação digital.</p>
            </div>
        </div>
    )
}

export default About