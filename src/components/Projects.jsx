import { Link } from "react-router-dom"
import CardsMarquee from "@components/CardsMarquee"

const Projects = () => {
  return (
    <>
      <div className="relative isolate px-4 py-6 lg:px-24">
        <div className="flex flex-col justify-center">
          
          <div className="flex flex-col md:flex-row md:justify-between gap-4 mb-12">
          
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-white uppercase" id='works'>works</p>
              <h1 className="text-custom-beige uppercase text-6xl font-extrabold">my <br /> portfolio</h1>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <p className="text-white self-end">2022-2025</p>
              <p className="text-custom-beige md:pl-16 md:self-end">
                My work blends creativity with strategy to deliver impactful design solutions. From striking logos and  engaging digital content to refined print materials. I focus on clear, visually compelling results that elevate brand  presence and drive engagement.
              </p>
            </div>
          </div>
          
          <CardsMarquee />

          <div className="flex flex-col lg:flex-row justify-between mt-12">
            
            <p className="text-white mb-4 lg:mb-0 uppercase grow-4">all categories</p>

            <div className="flex flex-col grow-4">
              
              <div className="flex flex-col">
                <hr className="h-px border-0 bg-gray-500 mb-4" />
                <Link to={'/category/graphic design'}>
                  <div className="text-custom-beige flex items-center justify-between">
                    <p>Graphic Design</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="flex flex-col">
                <hr className="h-px border-0 bg-gray-500 my-4" />
                <Link to={'/category/marketing & branding'}>
                  <div className="text-custom-beige flex items-center justify-between">
                    <p>Marketing & Branding</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </Link>
              </div>
              
              <div className="flex flex-col">
                <hr className="h-px border-0 bg-custom-beige my-4" />
                <Link to={'/category/publication & layout design'}>
                  <div className="text-custom-beige flex items-center justify-between">
                    <p>Publication & Layout Design</p>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </Link>
                <hr className="h-px border-0 bg-custom-beige my-4" />
              </div>

            </div>

          </div>

        </div>
      </div>

      <hr className="h-px border-0 bg-custom-beige" />
    </>
  )
}

export default Projects