import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="h-[60%] w-[60%] border-2 flex flex-col items-center justify-center gap-10">
      <h1 className="text-3xl text-white">SignUp</h1>
      <div className="flex flex-col px-2 gap-4 w-full">
        <input
          type="text"
          placeholder="Enter Username"
          className="px-2 rounded-md"
        />
        <input
          type="password"
          name=""
          id=""
          placeholder="Enter the Password"
          className="px-2 rounded-md"
        />
      </div>
      <button className="px-3 bg-green-500 py-1 rounded-md">Submit</button>
      <p className="text-white">
        Already have Account?
        <Link to={"/login"} className="text-blue-400 font-bold"> Login</Link>
      </p>
    </div>
  );
};

export default Signup;
