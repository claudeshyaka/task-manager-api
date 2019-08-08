require("../src/db/mongoose");
const Task = require("../src/models/task");

// Task.findByIdAndDelete("5d4b137ef2629d42447b9004")
//   .then(() => {
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const deleteTaskAndCount = async (id, status) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed: status });

  return { task, count };
};

deleteTaskAndCount("5d49a8f960830f200ced5b1c", false)
  .then(({ task, count }) => {
    console.log(task);
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
