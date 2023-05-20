import { Route } from '@tanstack/react-location';

import { Suspense, lazy } from 'react';
import Home from './Home';

const routes: Route[] = [
  //   {
  //     path: "/",
  //     element: (
  //       <Suspense fallback={null}>
  //         <Component />
  //       </Suspense>
  //     ),
  //   },
  // add more ...
  {
    path: '/',
    element: (
      <Suspense fallback={null}>
        <Home />
      </Suspense>
    ),
  },
];

export default routes;