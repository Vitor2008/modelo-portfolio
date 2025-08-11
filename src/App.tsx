import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Title from "./components/Title/Title"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"

function App() {

  return (
    <div>
      <Navbar/>
      <div className="site-container">
        <Home/>
      </div>
      <div className="back-black">
        <div className="site-container">
          <About/>
        </div>
      </div>
      <div className="site-container">
        <Title subTitle="Skills" title="Minhas Skills" classColor=""></Title>
        <Skills/>
      </div>
    </div>
  )
}

export default App
