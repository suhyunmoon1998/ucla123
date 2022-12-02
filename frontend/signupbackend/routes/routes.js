const express = require("express");
const router = express.Router();
const User = require("../models/UserModel");
const Item = require("../models/ItemModel");

router.post("/signup", (request, response) => {
  const signedUpUser = new User({
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

router.post("/addtocart", (request, response) => {
  if (request.body.username === undefined) {
    response.json({ status: 0, message: "Login First" });
    return;
  }

  const userSearch = { username: request.body.username };
  const new_item = request.body.product;
  let cart = [];

  // find the user and get their current cart
  User.findOne(userSearch)
    .then((data) => {
      console.log("data", data);
      if (data) {
        cart = data.cart;

        if (cart.includes(new_item)) {
          response.json({ status: 0, message: "Item already in cart" });
          return;
        }

        cart.push(new_item);

        User.updateOne(userSearch, { $set: { cart: cart } }).then((data) => {
          if (data) {
            response.json({ status: 1, message: "Item added to cart" });
          } else {
            response.json({ status: 0, message: "Item not added to cart" });
          }
        });
      } else {
        response.json({ status: 0, message: "Login First" });
        return;
      }
    })
    .catch((error) => {
      response.json(error);
      return;
    });
});

router.post("/addtoliked", (request, response) => {
  if (request.body.username === undefined) {
    response.json({ status: 0, message: "Login First" });
    return;
  }

  const userSearch = { username: request.body.username };
  const new_item = request.body.product;
  let liked = [];

  // find the user and get their current liked
  User.findOne(userSearch)
    .then((data) => {
      if (data) {
        liked = data.liked;

        if (liked.includes(new_item)) {
          response.json({ status: 0, message: "Item already in liked" });
          return;
        }

        liked.push(new_item);

        User.updateOne(userSearch, { $set: { liked: liked } }).then((data) => {
          if (data) {
            response.json({ status: 1, message: "Item added to liked" });
          } else {
            response.json({ status: 0, message: "Item not added to liked" });
          }
        });
      } else {
        response.json({ status: 0, message: "Login First" });
        return;
      }
    })
    .catch((error) => {
      response.json(error);
      return;
    });
});

router.post("/upload", (request, response) => {
  const product = request.body.productData;
  const username = request.body.userData.username;

  const uploadedItem = new Item({
    title: product.title,
    size: product.size,
    image: product.image,
    condition: product.condition,
    type: product.type,
    price: product.price,
  });

  const userSearch = { username: username };
  let saleArray = [];

  User.findOne(userSearch)
    .then((data) => {
      if (data) {
        // upload item to all item database
        uploadedItem
          .save()
          .then((data) => {
            console.log("data", data);
          })
          .catch((error) => {
            response.json(error);
          });

        saleArray = data.forSale;

        saleArray.push(product);

        // add item to users forSale array
        User.updateOne(userSearch, { $set: { forSale: saleArray } }).then(
          (data) => {
            if (data) {
              response.json({
                status: 1,
                message: "Item added to for sale items",
              });
            } else {
              response.json({
                status: 0,
                message: "Item not added to for sale items",
              });
            }
          }
        );
      } else {
        response.json({ status: 0, message: "Login First" });
        return;
      }
    })
    .catch((error) => {
      response.json(error);
      return;
    });
});

router.get("/products", (req, res) => {
  Item.find((err, items) => {
    if (err) {
      console.log(err);
    } else {
      res.json(items);
    }
    return "done";
  });
});

router.get("/users/:name", function (req, res) {
  return User.find({ username: req.params.name })
    .then(function (orders) {
      // return orders when resolved
      res.send(orders);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
});

module.exports = router;
