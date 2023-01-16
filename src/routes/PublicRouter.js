import { lazy } from 'react';
import { createBrowserRouter } from "react-router-dom";

import MainPage from '../pages/main/Main';
import DetailedPage from '../pages/Detailed';

const PublicRouter = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path:"/:key",
    element: <DetailedPage />,
  },
]);

export default PublicRouter;