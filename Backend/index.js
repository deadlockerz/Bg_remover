const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");  
const bcrypt = require('bcrypt');
const UserModel = require('./models/signup');

const app = express();
app.use(express.json());
app.use(cors()); 

mongoose.connect("mongodb://127.0.0.1:27017/removebg");

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email: email });
    if (!user) {
      return res.status(400).json("No record exists");
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (passwordMatch) {
      return res.json("Success");
    } else {
      return res.status(400).json("The password is incorrect");
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal Server Error");
  }
});

app.post('/signup', async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const newUser = { email: req.body.email, password: hashedPassword };
    const user = await UserModel.create(newUser);
    return res.json(user);
  } catch (err) {
    console.error(err);
    return res.status(500).json("Internal Server Error");
  }
});

app.listen(3030, () => {
  console.log("Server is running on port 3030");
});



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const User = require("./models/signup"); // import schema

// //lern this configration
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); // set the extended option
// app.use(cors()); 

// //creata database
// mongoose.connect("mongodb://127.0.0.1:27017/bgremove");

// //Routes
// app.post("/login", (req, res) => {
//   const { name, email, password } = req.body;
//   User.findOne({ email: email }, (e, user) => {
//     if (user) {
//       if (password === user.password) {
//         res.send({ message: "login Successfull", user: user });
//       } else {
//         res.send({ message: " password is incorrect" });
//       }
//     } else {
//       res.send({ message: "User not registered" });
//     }
//   });
// });

// app.post("/signup", (req, res) => {
//   const { name, email, password } = req.body;

//   User.findOne({ email: email }, (e, user) => {
//     if (user) {
//       res.send({ message: "User already exists" });
//     } else {
//       const user = new User({
//         name: name,
//         email: email,
//         password: password,
//       });

//       user.save((e) => {
//         if (e) {
//           res.send(e);
//         } else {
//           res.send({ message: "Successfully Registered" });
//         }
//       });
//     }});
// });

// app.listen(3030, () => {
//   console.log("Server is running on port 3030");
// });