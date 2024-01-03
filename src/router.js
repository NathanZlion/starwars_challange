import {createBrowserRouter} from 'react-router-dom';
import ActorsList from './Pages/ActorsList/ActorsList';
import ActorsDetail from './Pages/ActorDetail/ActorDetail';
import PageNotFound from './Pages/ErrorPage/PageNotFound';
// import the pages here

const router = createBrowserRouter([
    {
        path: '/',
        element: <ActorsList />,
    },
    {
        path: '/:id',
        element: <ActorsDetail />,
    },
    {
        path: '*',
        element: <PageNotFound />,
    }
])

export default router;