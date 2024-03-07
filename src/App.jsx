import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Logout from "./pages/Logout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/" element={<Homepage />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
