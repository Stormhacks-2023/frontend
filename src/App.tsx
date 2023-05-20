import { Toaster } from 'react-hot-toast';

import React, { Suspense, lazy, useEffect } from 'react';
import {
  Outlet,
  ReactLocation,
  Router,
  useLocation,
  useNavigate,
} from '@tanstack/react-location';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import routes from './pages/routes';

const Navbar = lazy(() => import('./components/Navbar'));

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="min-h-screen w-full">
      <Toaster
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
            borderRadius: '0px',
          },
        }}
      />
      <div className="h-full px-4 py-8">
        <Suspense fallback={null}>
          <Navbar />
        </Suspense>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
}

const wrappedApp = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        retry: false,
      },
    },
  });
  const reactLocation = new ReactLocation();
  return (
    <Router location={reactLocation} routes={routes}>
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools position="bottom-right" />
      </QueryClientProvider>
    </Router>
  );
};

export default wrappedApp;
