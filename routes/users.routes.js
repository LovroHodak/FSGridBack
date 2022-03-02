const express = require("express");
const router = express.Router();

const User = require("../models/user.model");

router.get("/users", (req, res) => {
  User.find()
    .then((user) => {
      res.status(200).json(user);
      console.log(user);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({
        message: "Server Error",
      });
    });
});

module.exports = router;
