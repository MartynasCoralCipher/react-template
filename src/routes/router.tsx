import { createBrowserRouter } from 'react-router-dom';
import { Layout } from '../components';
import { About, FAQ, Homepage, ContactUs } from '../pages';

export const Router = createBrowserRouter([
  {
    element: <Layout />, 
    children: [
      { index: true, path: '/', element: <Homepage /> },
      { path: '/about', element: <About /> },
      { path: '/faq', element: <FAQ /> },
      { path: '/contact-us', element: <ContactUs /> },
    ],
  },
]);