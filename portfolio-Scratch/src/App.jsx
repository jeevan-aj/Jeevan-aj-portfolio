import Hero from "./Components/HeroSection/Hero"
import Navbar from "./Components/Navbar/Navbar"
import './Components/HeroSection/Hero.module.css'
import AboutMe from "./Components/AboutMe/AboutMe"
import Projects from "./Components/ProjectsSection/Projects"
import Footer from "./Components/FooterSection/Footer"


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <Footer/>
     
    </>
  )
}

export default App
