const Tasks = require("../../models/tasks");

exports.createTask = async (req, res) => {
  try {
    let { title, description, userId } = req.body;
    // console.log(content, endDate, userId);
    title = title.trim();
    let task = new Tasks({
      title: title,
      description: description,
      userId: userId,
    });
    const savedTask = await task.save();
    if (savedTask) {
      res
        .status(200)
        .json({ message: "task created!", data: savedTask, status: 200 });
    }
  } catch (error) {
    res.status(500).json({ message: "Error creating Tasks", error: error });
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const { userId } = req.query;
    let response = await Tasks.find({ userId: userId });
    if (response) {
      res.status(200).json({ data: response, status: 200 });
    } else {
      res.json({ message: "No tasks found!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while loading tasks", error: error });
  }
};

exports.getTask = async (req, res) => {
  try {
    const { id } = req.params;
    let response = await Tasks.find({ _id: id });
    if (response) {
      res.status(200).json({ data: response, status: 200 });
    } else {
      res.json({ message: "task not found!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error while loading task", error: error });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    let response = await Tasks.findByIdAndDelete({ _id: id });
    if (response) {
      res.status(200).json({ message: "task deleted!", status: 200 });
    } else {
      res.json({ message: "task not found!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while deleting task", error: error });
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    let response;
    if (title === "" || description === "") {
      response = await Tasks.findByIdAndUpdate(
        { _id: id },
        { title: title, description: description, completed: completed }
      );
    } else {
      response = await Tasks.findByIdAndUpdate(
        { _id: id },
        { completed: completed }
      );
    }
    if (response) {
      res.status(200).json({ message: "task updated!", status: 200 });
    } else {
      res.json({ message: "task not found!" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error while updating task", error: error });
  }
};
