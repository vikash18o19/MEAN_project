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
