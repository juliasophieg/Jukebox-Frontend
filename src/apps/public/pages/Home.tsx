import { About } from '../components/About'
import { Banner } from '../components/Banner'
import { Cta } from '../components/Cta'
import { Features } from '../components/Features'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import { Repositories } from '../components/Repositories'

import './Home.scss'

export const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <Banner />
        <About />
        <Features />
        <Repositories />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
