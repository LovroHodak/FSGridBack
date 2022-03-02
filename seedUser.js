const User = require("./models/user.model");
require("./config/db.config");

User.insertMany([
  {
    name: "Andrej",
  },
  {
    name: "Miha",
  },
  {
    name: "Pahor",
  },
])
  .then(() => {
    console.log("Users added");
    process.exit();
  })
  .catch((err) => {
    console.log("Problems with adding Users: ", err);
  });
