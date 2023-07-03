
import './App.css'
import Footer from './Footer/Footer'
import FooterBottom from './Footer/FooterBottom'
import Banner from './components/Banner/Banner'
import Contact from './components/Contact/Contact'
import Features from './components/Features/Features'
import Navbar from './components/Navbar/Navbar'
import Projects from './components/Projects/Projects'
import Resume from './components/Resume/Resume'
import Testimonial from './components/Testimonial/Testimonial'

function App() {
  return (
    <div className='w-full h-auto bg-bodyColor text-lightText px-4 '>
       <Navbar></Navbar>
      <div className='max-w-screen-xl mx-auto '>
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Testimonial/>
        <Contact/>
        <Footer/>
        <FooterBottom/>
      </div>
    </div>
  )
}

export default App
