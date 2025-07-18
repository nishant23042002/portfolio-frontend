import './App.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Certifications from './components/Certification'
import IntroPage from './components/IntroPage'
import Skills from './components/Skills'


function App() {

  return (
    <>
      <Header />
      <IntroPage />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </>
  )
}

export default App
