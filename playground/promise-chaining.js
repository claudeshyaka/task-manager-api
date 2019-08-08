require("../src/db/mongoose");
const User = require("../src/models/user");

// User.findByIdAndUpdate("5d4b0fae92576a1e64c1e75d", { age: 1 })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(e => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });

  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount("5d4b0fae92576a1e64c1e75d", 2)
  .then(count => {
    console.log(count);
  })
  .catch(e => {
    console.log(e);
  });
