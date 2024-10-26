const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { Todo } = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());

// Creating a task
app.post("/task", async (req, res) => {
  const createPayload = req.body;
  const parseBody = createTodo.safeParse(createPayload);

  if (!parseBody.success) {
    res.status(411).json({
      msg: "Invalid Inputs",
    });
    return;
  }

  try {
    await Todo.create({
      title: createPayload.title,
      complete: false,
    });

    res.json({
      msg: "Todo Created",
    });
  } catch (error) {
    console.error("Error creating todo:", error);
    res.status(500).json({
      msg: "Failed to create todo",
      error: error.message,
    });
  }
});

// Getting the tasks
app.get("/todos", async (req, res) => {
  const todos = await Todo.find({});
  res.json({
    todos,
  });
});

// Marking the tasks as completed
app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  const parseBody = updateTodo.safeParse(updatePayload);
  if (!parseBody.success) {
    res.status(411).json({
      msg: "Invalid Inputs",
    });
    return;
  }

  await Todo.updateOne(
    // Use updateOne instead of update
    { _id: req.body.id }, // Filter
    { complete: true } // Update
  );

  res.json({
    msg: "Todo marked as completed",
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
