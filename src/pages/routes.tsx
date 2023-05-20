import { Route } from '@tanstack/react-location';

import { Suspense, lazy } from 'react';
import Home from './Home';
import Help from './Help';

const routes: Route[] = [
  {
    path: '/',
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/home',
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: '/help',
    element: (
      <Suspense fallback={null}>
        <Help />
      </Suspense>
    ),
  },
];

export default routes;