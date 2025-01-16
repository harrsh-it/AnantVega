import React from 'react'
import{Hero, Features, BannerTop, MovingServices, ServicesCards, BannerBottom, MovingPartners, Blogs, CrewCards, Footer} from './sections'
import Nav from './components/Nav';
const App = () => {
  return (
    <main className="relative">
    <Nav />

    <section className="">
    < Hero />
    </section>

    <section>
      <Features />
    </section>

    <section>
      <BannerTop />
    </section>

    <section>
      <MovingServices />
    </section>

    <section>
      <ServicesCards />
    </section>

    <section> 
      <BannerBottom />
    </section>

    <section>
      <MovingPartners />
    </section>

    <section>
      <Blogs />
    </section>

    <section>
      <CrewCards />
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>

    </main>
  )
}

export default App;
  
