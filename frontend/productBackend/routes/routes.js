const express = require("express");
const router = express.Router();

router.post("/upload", (request, response) => {
    const uploadedItem = new Item({
      title: request.body.title,
      description: request.body.description,
      image: request.body.image,
      condition: request.body.condition,
      type: request.body.type,
      price: request.body.price
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