/* const express = require("express");
//const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/users");
const router = express.Router();

router.post("/signup", (req, res, next) => {

    const user = new User({
      userName: req.body.userName,
      firstName: req.body.firstName,
      lastName:req.body.lastName,
      city: req.body.city,
      street: req.body.street,
      code: req.body.code,
      password: req.body.password,
      retype:req.body.retype
    });
    user
      .save()
      .then(result => {
        res.status(201).json({
          message: "User created!",
          result: result
        });
      })
      .catch(err => {
        res.status(500).json({
          error: err
        });
      });
  });

router.get("", (req, res, next) => {
  User.find()
    .then(documents => {

      res.status(200).json({
        message: "users fetched successfully!",
        users: documents
      })
    });
});







router.post("/login", (req, res, next) => {
  let fetchedUser;
  User.findOne({
      email: req.body.userName
    })
    .then(user => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      fetchedUser = user;
      return bcrypt.compare(req.body.password, user.password);
    })
    .then(result => {
      if (!result) {
        return res.status(401).json({
          message: "Auth failed"
        });
      }
      const token = jwt.sign({
          userName: fetchedUser.userName,
          userId: fetchedUser._id
        },
        "secret_this_should_be_longer", {
          expiresIn: "1h"
        }
      );
      res.status(200).json({
        token: token,
        expiresIn: 3600,
        userId: fetchedUser._id
      });
    })
    .catch(err => {
      return res.status(401).json({
        message: "Auth failed"
      });
    });
});

module.exports = router;
 */
