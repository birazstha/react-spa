import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Product';
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import Gallery from './pages/Gallery';
import ProductDetails from './pages/ProductDetails';

const router = createBrowserRouter ([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <ErrorPage />,
    children: [
      // {path: '', element: <Home />},
      {index: true, element: <Home />}, /* If path is empty, just write index:true */
      {path: 'products', element: <Products />},
      {path: 'products/:productId', element: <ProductDetails />},
      {path: 'galleries', element: <Gallery />},
    ],
  },
]);

function App () {
  return <RouterProvider router={router} />;
}

export default App;
