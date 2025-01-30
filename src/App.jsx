import Contact from "./components/contact/Contact"
import Home from "./components/home/Home"
import Portfolio from "./components/portfolio/Portfolio"
import Services from "./components/services/Services"

const App = () => {
  return (
    <div className='container'>
      <section id="home">
        <Home />
      </section>
      <section id="services">
        <Services />
      </section>
      {/* <section id="portfolio"> */}
        <Portfolio />
      {/* </section> */}
      <section id="contact">
        <Contact />
      </section>
    </div>
  )
}

export default App