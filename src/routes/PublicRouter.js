import { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";

import MainPage from './Main';
import DetailedPage from '../pages/detailed/Detailed';
import ErrorPage from '../pages/error/Error';

const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path:"/:key",
    element: <DetailedPage />,
  },
  {
    path:"*",
    element: <ErrorPage />
  }
]);

export default PublicRouter;