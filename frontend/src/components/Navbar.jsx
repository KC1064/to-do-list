import { Avatar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full px-5 py-3 lg:py-6 flex items-center justify-between">
      <img
        src="./logo.png"
        alt="Logo"
        className="h-10 w-10 lg:h-16 lg:w-16 rounded-full border-4 border-teal-400"
      />
      <Typography
        variant="h6"
        sx={{
          fontSize: { xs: 18, lg: 36 },
        }}
        className="text-teal-300 ml-4"
      >
        Get Your Work Done with <span className="italic font-bold">DoWork</span>
      </Typography>
      <Avatar
        sx={{
          bgcolor: teal[500],
          width: { xs: 32, lg: 44 }, 
          height: { xs: 32, lg: 44 },
        }}
        className="ml-4"
      >
        K
      </Avatar>
    </div>
  );
};

export default Navbar;
