const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const Item = require("../models/ItemModel");

router.post("/signup", (request, response) => {
  const signedUpUser = new User({
    //fullName: request.body.fullName,
    username: request.body.username,
    email: request.body.email,
    password: request.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

router.post("/signin", (request, response) => {
  User.findOne(request.body)
    .then((data) => {
      if (data) {
        response.json({ status: 1, message: "Login Ok" });
      } else {
        response.json({ status: 0, message: "Login Failed" });
      }
    })
    .catch((error) => {
      response.json(error);
    });
});

router.post("/upload", (request, response) => {
  const uploadedItem = new Item({
    name: request.body.name,
    price: request.body.price,
  });
  uploadedItem
    .save()
    .then((data) => {
      response.json(data);
    })
    .catch((error) => {
      response.json(error);
    });
});

module.exports = router;
