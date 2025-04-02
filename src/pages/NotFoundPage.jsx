import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
      <div className="bg-white">
        <div className="py-16 px-4 mx-auto max-w-screen-xl lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-rose-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                <p className="mb-4 text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link to={'/'}>
                  <button
                    className="inline-flex text-white bg-rose-500 focus:ring-4 focus:outline-none focus:ring-rose-500 font-medium rounded-lg text-md px-5 py-2.5 text-center my-4 hover:bg-rose-600 hover:cursor-pointer"
                  >Back to Homepage</button>
                </Link>
            </div>   
        </div>
    </div>
  );
};

export default NotFoundPage;