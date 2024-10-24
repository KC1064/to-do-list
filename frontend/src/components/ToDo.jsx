import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const Container = () => {
  const tasks = [
    "Buy Groceries",
    "Buy Chocolate",
    "Buy Milk",
    "Complete Project",
  ];
  return (
    <div className="w-full px-4 lg:px-8 flex justify-center items-center text-white ">
      <div className="lg:w-[50%] w-[80%] sm:w-[80%] border border-white flex flex-col gap-2 shadow-purple-300 shadow-lg rounded-xl">
        {tasks.map((item, index) => {
          return (
            <List
              key={index}
              className="hover:bg-purple-200 hover:text-blue-600 rounded-lg transition-all duration-300"
            >
              <ListItem className="flex gap-5">
                <ListItemText primary={item} />
                <div className="flex gap-6 items-center">
                  <button
                    className="flex gap-2 items-center"
                    title="Task Complete"
                  >
                    <IoMdCheckmarkCircleOutline size={20}/>
                  </button>
                  <button
                    className="flex gap-2 items-center"
                    title="Delete Task"
                  >
                    <RiDeleteBin6Line size={20}/>
                  </button>
                  <button
                    className="flex gap-2 items-center"
                    title="Update Task"
                  >
                    <FaRegEdit size={20}/>
                  </button>
                </div>
              </ListItem>
            </List>
          );
        })}
      </div>
    </div>
  );
};

export default Container;
