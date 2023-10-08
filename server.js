const connectDB = require("./handler/DbConnect");
const express = require("express");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;

connectDB();

const UserRouter = require("./routes/api/user");
const TaskRouter = require("./routes/api/tasks");
const authenticate = require("./middleware/authentication");

app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/user", UserRouter);
app.use("/tasks", authenticate, TaskRouter);

app.get("/", (req, res) => {
  res.send("Welcome to the server for MEAN application");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
