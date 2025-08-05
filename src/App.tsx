import Navbar from "./components/Navbar/Navbar"
import Home from "./components/Home/Home"

function App() {

  return (
    <div>
      <Navbar/>
      <div className="site-container">
        <Home/>
      </div>
    </div>
  )
}

export default App
