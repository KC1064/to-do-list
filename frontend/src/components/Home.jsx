import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-full h-max flex flex-col justify-center items-center">
      <h1 className="lg:text-4xl md:text-2xl sm:text-xl text-3xl text-yellow-500 font-extrabold text-center">
        Stay organized, tackle tasks, and achieve your goals with ease!
      </h1>
      <div className="flex gap-4 mt-8">
        <Link to={"/login"}>
          <button className="px-4 py-1 rounded-lg bg-yellow-400 font-semibold hover:">
            Login
          </button>
        </Link>
        <Link to={"/signup"}>
          <button className="px-4 py-1 rounded-lg bg-black text-white font-semibold hover:">
            SignUp
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
