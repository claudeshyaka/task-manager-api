const express = require("express");
require("./db/mongoose");
const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const app = express();
const port = process.env.PORT;

// Allows express to parse JSON.
app.use(express.json());

// app routers
app.use(userRouter);
app.use(taskRouter);

// Start server
app.listen(port, () => {
  console.log("Server is up on port " + port);
});
