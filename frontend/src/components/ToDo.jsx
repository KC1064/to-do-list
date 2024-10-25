import React, { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FaRegEdit } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";

const Container = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [completed, setCompleted] = useState([]);
  const [updateIndex, setUpdateIndex] = useState(null);
  const [updatedValue, setUpdatedValue] = useState("");

  const handleClick = () => {
    if (input.trim()) {
      setTodo([...todo, input]);
      setInput(""); // Clear input after adding
    }
  };

  const handleUpdate = (index) => {
    if (updatedValue.trim()) {
      const updatedTodos = todo.map((item, i) =>
        i === index ? updatedValue : item
      );
      setTodo(updatedTodos);
      setUpdatedValue(""); // Clear updated value
      setUpdateIndex(null); // Reset update index
    }
  };

  return (
    <div className="w-full px-4 lg:px-8 flex justify-center items-center text-white ">
      <div className="lg:w-[70%] w-[95%] sm:w-full border border-white flex flex-col gap-2 shadow-purple-300 shadow-lg rounded-xl">
        <h2 className="text-center w-full text-3xl font-bold font-serif mt-3 ">
          Add Your Todos
        </h2>
        <div className="flex items-center justify-center gap-2 px-2">
          <input
            name="todo"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Write what you want to Do"
            className="rounded-lg px-2 py-1 w-[80%] font-semibold text-black"
          />
          <button
            className="px-4 py-1 bg-green-500 rounded-lg"
            onClick={handleClick}
          >
            Add
          </button>
        </div>
        <div className="w-full wrap">
          {todo.map((item, index) => (
            <List
              key={index}
              className="hover:bg-purple-200 hover:text-blue-600 rounded-lg transition-all duration-300 "
            >
              <ListItem className="flex gap-5">
                <ListItemText
                  primary={item}
                  className={completed[index] ? "line-through" : ""}
                />
                <div className="flex flex-wrap gap-6 items-center">
                  <button
                    className="flex gap-2 items-center"
                    title="Task Complete"
                    onClick={() => {
                      const newCompleted = [...completed];
                      newCompleted[index] = !newCompleted[index];
                      setCompleted(newCompleted);
                    }}
                  >
                    <IoMdCheckmarkCircleOutline size={20} />
                  </button>
                  <button
                    className="flex gap-2 items-center"
                    title="Delete Task"
                    onClick={() => setTodo(todo.filter((_, i) => i !== index))}
                  >
                    <RiDeleteBin6Line size={20} />
                  </button>
                  <button
                    className="flex gap-2 items-center"
                    title="Update Task"
                    onClick={() => {
                      setUpdateIndex(index);
                      setUpdatedValue(item); // Pre-fill with current value
                    }}
                  >
                    <FaRegEdit size={20} />
                  </button>
                  {updateIndex === index && (
                    <div className="flex gap-2 items-center w-full">
                      <input
                        type="text"
                        value={updatedValue}
                        onChange={(e) => setUpdatedValue(e.target.value)}
                        placeholder="Edit the task"
                        className="text-black font-mono rounded-md"
                      />
                      <button
                        onClick={() => handleUpdate(index)}
                        className="bg-yellow-300 px-1 rounded-md text-black font-bold"
                      >
                        Update
                      </button>
                    </div>
                  )}
                </div>
              </ListItem>
            </List>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Container;
