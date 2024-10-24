import { Avatar } from "@mui/material";
import { yellow } from "@mui/material/colors";
import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-max px-5 py-4 lg:py-6 flex items-center justify-between">
      <img
        src="./logo.png"
        alt="Logo"
        className="h-10 w-10 lg:h-16 lg:w-16 rounded-full border-2 border-yellow-400"
      />
      <Avatar
        sx={{
          border: yellow[400],
          bgcolor: [500],
          width: { xs: 32, lg: 44 },
          height: { xs: 32, lg: 44 },
        }}
      >
        K
      </Avatar>
    </div>
  );
};

export default Navbar;
