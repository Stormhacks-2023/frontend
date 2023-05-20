import { Toaster } from "react-hot-toast";

import { Suspense, lazy } from "react";
import {
  Outlet,
  ReactLocation,
  Router,
  useLocation,
  useNavigate,
} from "@tanstack/react-location";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import routes from "./pages/routes";
import hikingVideo from "./assets/hiking-vid.mp4";

const Navbar = lazy(() => import("./components/Navbar"));

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <div className="min-h-screen w-full">
      <video
        src={hikingVideo}
        loop
        autoPlay
        muted
        className="absolute h-[100%] w-[100%] object-cover"
      />
      <Toaster
        toastOptions={{
          style: {
            background: "#333",
            color: "#fff",
            borderRadius: "0px",
          },
        }}
      />

      <div className="flex h-full items-center">
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
