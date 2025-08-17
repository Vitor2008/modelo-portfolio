import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Services from "./components/Services/Services"
import Projects from "./components/Projects/Projects"
import Contact from "./components/Contact/Contact"

function App() {

  return (
    <div>
      <Navbar />
      <div className="site-container">
        <Home />
      </div>
      <div className="back-black">
        <div className="site-container">
          <About />
        </div>
      </div>
      <div className="site-container">
        <Title subTitle="Skills" title="Minhas Skills" classColor=""></Title>
        <Skills />
      </div>
      <div className="back-black">
        <div className="site-container">
          <Title subTitle="Serviços" title="Minhas Especialidades" classColor=""></Title>
          <Services />
        </div>
      </div>
      <div className="site-container">
        <Title subTitle="Projetos" title="Projetos em Destaque" classColor=""></Title>
        <Projects />
      </div>
      <div className="back-black">
        <div className="site-container">
          <Title subTitle="Contato" title="Entre em Contato" classColor=""></Title>
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default App
