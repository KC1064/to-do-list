import React from "react";
import bg from "./assets/bg.svg";
import Navbar from "./components/Navbar";
import ToDo from "./components/ToDo";
import Home from "./components/Home";
import Login from "./components/Login"
import Signup from "./components/Signup"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/todo",
      element: <ToDo />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex flex-col items-center gap-8 bg-black justify-between"
    >
      <Navbar />
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
};

export default App;
