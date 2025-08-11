import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"
import Title from "./components/Title/Title"
import About from "./components/About/About"

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
    </div>
  )
}

export default App
