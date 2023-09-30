// router to handle task endpoints

const express = require("express");

const router = express.Router();
const taskController = require("../controllers/taskController");
const Tasks = require("../../models/tasks");

router.post("/", taskController.createTask);

router.get("/", taskController.getAllTasks);

router.get("/:id", taskController.getTask);

router.delete("/:id", taskController.deleteTask);

router.put("/:id", taskController.updateTask);

module.exports = router;
