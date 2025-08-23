import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from './components/homepage/Homepage';
import Profile from './components/profile/Profile';
import DataEntry from './components/pattern-data-entry/DataEntry';
import { Routes, Route } from "react-router-dom";
import KnittingPattern from './components/pattern-templates/KnittingPattern';
import { SignedInUserContextProvider } from './contexts/SignedInUserContext';
import JumperSelectionCanvas from "./components/pattern-data-entry/data-entry-children/JumperSelectionCanvas";
import DeleteProfilePopUp from './components/profile/profile-children/profile-page-children/DeleteProfilePopUp';


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
    path:"/canvas-test", element: <JumperSelectionCanvas />
  },
  {
    path: "test",
    element:<DeleteProfilePopUp />
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
