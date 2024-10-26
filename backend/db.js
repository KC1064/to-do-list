const mongoose = require("mongoose");

// Connect to MongoDB with error handling
mongoose.connect("mongodb+srv://kron:lkRjspHxcvdssUeM@cluster0.jtdfp.mongodb.net/todos")
  .then(() => console.log("MongoDB connected successfully"))
  .catch((err) => console.error("MongoDB connection error:", err));

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  complete: { type: Boolean, default: false },
});

// Create the model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo };
