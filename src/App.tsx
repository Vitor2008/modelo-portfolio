import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Title from "./components/Title/Title"

function App() {

  return (
    <div>
      <Navbar/>
      <div className="site-container">
        <Home/>
        <Title subTitle='Sobre Mim' title='Desenvolvedor Full-Stack'/>
      </div>
    </div>
  )
}

export default App
