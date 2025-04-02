function Hero() {
  return (
    <>
      <div className="relative isolate mx-auto max-w-7xl p-8 lg:p-16 mb-12">

        <div className="flex flex-col lg:flex-row lg:gap-32 text-white font-thin">
          <div className="flex flex-col gap-12 lg:gap-28 max-w-md">

            <p className="text-lg text-pretty sm:text-xl/8">
              Hey! <br />
              I'm Mary Princess, a <span className="text-custom-beige">graphic designer</span> who creates eye-catching designs that communicate ideas clearly. 
              My work includes digital graphics and print materials.
              I focus on simplicity and effectiveness to make your brand stand out.
            </p>

            <div>
              <h1 className="text-lg uppercase">connect</h1>

              <div className="text-custom-beige flex items-center gap-16 mb-2">
                <a href="#">Linkedln</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

              <div className="text-custom-beige flex items-center gap-20">
                <a href="#">Email</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>

            </div>

          </div>

          <div className="hidden lg:block w-full lg:w-auto lg:max-w-2xl xl:max-w-3xl max-h-[500px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=2449&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Dashboard image"
              className="rounded-l-3xl object-cover w-full h-full max-h-[500px]"
            />
          </div>

        </div>

      </div>

      <hr className="h-px border-0 bg-custom-beige" />
    </>
  )
}
  
export default Hero
  