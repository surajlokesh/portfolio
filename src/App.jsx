import { useTheme } from './contexts/theme'
import Chrome from './components/Chrome'
import Hero from './components/Hero'
import Records from './components/Records'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollTop from './components/ScrollTop'
import { experience, education } from './portfolio'
import './App.css'

const App = () => {
  const { themeName } = useTheme()

  return (
    <div className={`app app--${themeName}`}>
      <Chrome />

      <main>
        <Hero />
        <Records id='work' heading='Work' rows={experience} />
        <Projects />
        <Skills />
        <Records id='education' heading='Education' rows={education} />
        <Contact />
      </main>

      <Footer />
      <ScrollTop />
    </div>
  )
}

export default App
