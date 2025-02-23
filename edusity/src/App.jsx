import React from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Programs from './components/program/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Gallery from './components/gallery/Gallery'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle='GALLERY' title='Campus Album' />
        <Gallery />
        <Title subTitle='Our PROGRAM' title='What we Offer' />
        <Programs />
        <About />
        
        <Title subTitle='TESTIMONIALS' title='What Student Says' />
        <Testimonials />
        <Title subTitle='CONTACT US' title='Get Connected' />
        <Contact />
        <Footer />
      </div>

    </div>
  )
}

export default App
