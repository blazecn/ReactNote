import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "@/Pages/Home";
import About from "@/Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
]);

class App extends React.Component {
  render() {
    return <RouterProvider router={router}></RouterProvider>;
  }
}

export default App;
