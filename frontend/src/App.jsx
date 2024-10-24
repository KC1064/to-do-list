import React from "react";
import bg from "./assets/bg.svg";
import Navbar from "./components/Navbar";
import Container from "./components/Container";

const App = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-screen flex flex-col items-center gap-8 bg-black"
    >
      <Navbar />
      <Container />
    </div>
  );
};

export default App;
