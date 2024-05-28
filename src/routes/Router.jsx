import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import RedirectionRoute from '../components/route/RedirectionRoute';
import ProtectedRoute from '../components/route/ProtectedRoute';

// home
import Home from '../pages/Home/Home';
import SignIn from '../pages/SignIn';

import Feedback  from '../pages/feedback';

import MainLayout from '../layouts/MainLayout';
import ErrorLayout from '../layouts/ErrorLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorLayout />,
        children: [
            {
                index: true,
                element: <RedirectionRoute />,
            },
          /*  {
                path: 'Home',
                element: <Home />,
            },*/
            {
                path: 'Feedback',
                element: <Feedback />,
            },
            
        ],
    },
]);

export default router;