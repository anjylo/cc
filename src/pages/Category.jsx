import NavigationBar from '@components/NavigationBar'
import { Link, useParams } from "react-router-dom"

const Category = () => {
  const { category } = useParams();

  const imageUrl = 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  
  const images = [
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
    {
      imageUrl: imageUrl
    },
  ];

  return (
    <>
      <section className='flex flex-col min-h-screen bg-custom-gunmetal'>
        <NavigationBar className="flex-1" />

        <div className="relative isolate px-4 py-6 lg:px-24">
          <div className='text-gray-400 flex items-center gap-2'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 19.5 4.5 12l6.75-7.5M4.5 12h15" />
            </svg>
            <Link to={'/'}>
              <p className='uppercase'>Back</p>
            </Link>
          </div>

          <div className='flex flex-col items-center lg:flex-row lg:justify-between lg:items-start gap-2'>
            <div>
              <h1 className='text-custom-beige uppercase text-6xl font-extrabold'>{category}</h1>
              
              <hr className="hidden lg:block h-px border-0 bg-gray-500 my-6" />
              
              <div className='hidden lg:flex lg:flex-col lg:gap-6 uppercase text-custom-beige'>
                <p>social media post</p>
                <p>flyer</p>
                <p>poster</p>
                <p>inforgraphics</p>
              </div>
            </div>
            <div className='flex flex-col gap-10'>
              {images.map((img, key) => {
                return <img key={key} className="w-112 h-72 rounded-lg  object-cover" src={img.imageUrl} alt="Card Image"/>
              })}
            </div>
          </div>

        </div>

      </section>
    </>
  )
}

export default Category