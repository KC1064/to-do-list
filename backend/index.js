const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo, todo } = require("./db");
const app = express();
const PORT = 3000;

app.use(express.json());

//Creating a task
app.post("/task", async (req, res) => {
  const body = req.body;
  const parseBody = createTodo.safeParse(body);
  if (!parseBody.success) {
    res.status(411).json({
      msg: "Invalid Inputs",
    });
    return;
  }
  
  await todo.create({
    title: body.title,
    description: body.description,
    completed: false
  })

  res.json({
    msg: "Todo Created"
  })
});

//Getting the tasks
app.get("/todos", async (req, res) => {

    const todos = await todo.find({})

    res.json({
        todos
    })

});

// Marking the tasks as completed
app.put("/completed", async (req, res) => {
  const update = req.body;
  const parseBody = updateTodo.safeParse(update);
  if (!parseBody.success) {
    res.status(411).json({
      msg: "Invalid Inputs",
    });
    return;
  }

  await todo.update({
    _id: req.body.id
  },{
    completed:true
  })

  res.json({
    msg: "Todo marked as completed"
  })

});

app.listen(() => {
  console.log("Server is running on port 3000");
});
