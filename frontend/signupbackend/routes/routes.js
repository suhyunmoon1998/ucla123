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
    response.json({ status: 0, message: "Please login to add to cart" });
    return;
  }

  const userSearch = { username: request.body.username };
  const new_item = request.body.product;
  let cart = [];
  let selling = [];
  // find the user and get their current cart
  User.findOne(userSearch)
    .then((data) => {
      if (data) {
        cart = data.cart;
        let duplicate = false;
        // console.log(selling)
        selling = data.forSale;
        selling.forEach((item) => {
          if (item.title === new_item.name) {
            response.json({ status: 0, message: "You cannot buy an item that you are selling" });
            duplicate=true;
            return;
          }
        });

        if (duplicate) return;
        duplicate = false;

        cart.forEach((item) => {
          if (item.name === new_item.name) {
            response.json({ status: 0, message: "Item already in cart" });
            duplicate = true;
            return;
          }
        });

        cart.push(new_item);

        if (duplicate === false) {
          User.updateOne(userSearch, { $set: { cart: cart } }).then((data) => {
            if (data) {
              response.json({ status: 1, message: "Item added to cart" });
            } else {
              response.json({ status: 0, message: "Item not added to cart" });
            }
          });
        }
      } else {
        response.json({ status: 0, message: "Please login to add to cart" });
        return;
      }
    })
    .catch((error) => {
      return;
    });
});

router.post("/removefromcart", (request, response) => {
  if (request.body.username === undefined) {
    response.json({ status: 0, message: "Please login to remove from cart" });
    return;
  }

  const userSearch = { username: request.body.username };
  const new_item = request.body.productData;
  let cart = [];
  let new_cart = [];

  // find the user and get their current cart
  User.findOne(userSearch)
    .then((data) => {
      if (data) {
        cart = data.cart;

        cart.forEach((item) => {
          if (item.name !== new_item.name) {
            new_cart.push(item);
          }
        });

        User.updateOne(userSearch, { $set: { cart: new_cart } }).then(
          (data) => {
            if (data) {
              response.json({ status: 1, message: "Item removed from cart" });
            } else {
              response.json({
                status: 0,
                message: "Item not removed from cart",
              });
            }
          }
        );
      } else {
        response.json({
          status: 0,
          message: "Please login to remove from cart",
        });
        return;
      }
    })
    .catch((error) => {
      console.log(error);
      return;
    });
});

router.post("/isliked", (request, response) => {
  if (request.body.username === undefined) {
    response.json({ status: 0, message: "Please login to add to cart" });
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
        let wasLiked = false;

        liked.forEach((item) => {
          if (item.name === new_item.name) {
            response.json({ status: 2, message: "Item has been liked" });
            wasLiked = true;
            return;
          }
        });

        if (wasLiked === false) {
          response.json({ status: 3, message: "Item has not been liked" });
        }
      } else {
        response.json({ status: 0, message: "Please login to like item" });
        return;
      }
    })
    .catch((error) => {
      return;
    });
});

router.post("/addtoliked", (request, response) => {
  if (request.body.username === undefined) {
    response.json({ status: 0, message: "Please login to add to cart" });
    return;
  }

  const userSearch = { username: request.body.username };
  const new_item = request.body.product;
  let liked = [];
  let selling = [];

  // find the user and get their current liked
  User.findOne(userSearch)
    .then((data) => {
      if (data) {
        liked = data.liked;
        let duplicate = false;

        selling = data.forSale;
        selling.forEach((item) => {
          if (item.title === new_item.name) {
            response.json({ status: 0, message: "You cannot like an item that you are selling" });
            duplicate=true;
            return;
          }
        });

        if (duplicate) return;
        duplicate = false;

        liked.forEach((item) => {
          if (item.name === new_item.name) {
            response.json({ status: 0, message: "Item already in liked" });
            duplicate = true;
            return;
          }
        });

        liked.push(new_item);

        if (duplicate === false) {
          User.updateOne(userSearch, { $set: { liked: liked } }).then(
            (data) => {
              if (data) {
                response.json({ status: 1, message: "Item added to liked" });
              } else {
                response.json({ status: 0, message: "Could not like item." });
              }
            }
          );
        }
      } else {
        response.json({ status: 0, message: "Please login to like item" });
        return;
      }
    })
    .catch((error) => {
      return;
    });
});

router.post("/removefromliked", (request, response) => {
  if (request.body.username === undefined) {
    response.json({ status: 0, message: "Please login to remove from liked" });
    return;
  }

  const userSearch = { username: request.body.username };
  const new_item = request.body.product;
  let cart = [];
  let new_cart = [];

  // find the user and get their current cart
  User.findOne(userSearch)
    .then((data) => {
      if (data) {
        cart = data.liked;

        cart.forEach((item) => {
          if (item.name !== new_item.name) {
            new_cart.push(item);
          }
        });

        User.updateOne(userSearch, { $set: { liked: new_cart } }).then(
          (data) => {
            if (data) {
              response.json({ status: 1, message: "Item removed from liked" });
            } else {
              response.json({
                status: 0,
                message: "Item not removed from liked",
              });
            }
          }
        );
      } else {
        response.json({
          status: 0,
          message: "Please login to remove from liked",
        });
        return;
      }
    })
    .catch((error) => {
      console.log(error);
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
          .then((data) => {})
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
