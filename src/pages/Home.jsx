import NavigationBar from '@components/NavigationBar'
import Hero from '@components/Hero'
import Projects from '@components/Projects'
import Experiences from '@components/Experiences'
import Footer from '@components/Footer'

const Home = () => {
  return (
    <>
      <section className='flex flex-col min-h-screen bg-custom-gunmetal'>
        <NavigationBar className="flex-1" />
        <Hero className="flex-1" />
        <Projects className="flex-1" />
        <Experiences className="flex-1" />
        <Footer className="flex-1" />
      </section>
    </>
  )
}
  
export default Home
  