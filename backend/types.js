const zod = require("zod");

// Schema for creating a todo
const createTodo = zod.object({
  title: zod.string().min(1, "Title is required"), // Ensure title is not empty
});

// Schema for updating a todo
const updateTodo = zod.object({
  id: zod.string().length(24, "Invalid ID format"), // MongoDB IDs are 24 characters
});

// Export the schemas
module.exports = {
  createTodo,
  updateTodo,
};
