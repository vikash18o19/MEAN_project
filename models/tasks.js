// ● Define a simple data model for a "Task" object with the following properties:
// ● id: ObjectId (a unique identifier for the task)
// ● title: String (title of the task)
// ● description: String (description of the task)
// ● completed: Boolean (flag indicating whether the task has been completed)

const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = mongoose.model("Task", taskSchema);
