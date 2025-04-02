import NotFoundPage from '@pages/NotFoundPage'
import Home from '@pages/Home'
import About from '@pages/About'
import Category from '@pages/Category'

const routes = [
    {
        path: '*',
        element: <NotFoundPage />
    },
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/category/:category',
        element: <Category />
    }
];


export default routes;