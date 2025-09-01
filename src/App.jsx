import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './features/homepage/Homepage';
import Profile from './features/profile/Profile';
import DataEntry from './features/pattern-data-entry/DataEntry';
import KnittingPattern from './features/pattern-templates/KnittingPattern';
import { SignedInUserContextProvider } from './contexts/SignedInUserContext';
import Loader from './components/Loader';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/data-entry",
    element: < DataEntry />
  },
  {
    path: "/knitting-pattern/:patternId",
    element:<KnittingPattern />
  },
  {
    path: "/loader",
    element:<Loader />
  }
]);

function App() {
  return (
    <div className="App">
      <SignedInUserContextProvider value={{}}>
      <RouterProvider router={router} />
      </SignedInUserContextProvider>
    </div>
  );
}

export default App;
