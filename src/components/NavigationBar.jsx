import { Link } from "react-router-dom"

function NavigationBar() {
  return (
    <>
      <header>
        <nav className="px-4 py-6 lg:px-24 flex justify-between">
         
         <h1 className="text-custom-beige">maryprincess<span className="font-bold">designs</span> </h1> 
          
          <ul className="flex justify-end">
            <li>
              <a href='#works'>
                <span className="text-xs text-custom-beige px-4 md:text-base sm:text-sm hover:text-white">Work</span>
              </a>
            </li>
            <li>
              <a href='#about'>
                <span className="text-xs text-custom-beige px-4 md:text-base sm:text-sm hover:text-white">About</span>
              </a>
            </li>
            <li>
              <a href='#contact'>
                <span className="text-xs text-custom-beige px-4 md:text-base sm:text-sm hover:text-white">Contact</span>
              </a>
            </li>
          </ul>
        </nav>
    </header>
    </>
  )
}
  
export default NavigationBar
  