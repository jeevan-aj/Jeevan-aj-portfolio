import Hero from "./Components/HeroSection/Hero"
import Navbar from "./Components/Navbar/Navbar"
import './Components/HeroSection/Hero.module.css'
import AboutMe from "./Components/AboutMe/AboutMe"
import Projects from "./Components/ProjectsSection/Projects"


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
     
    </>
  )
}

export default App
