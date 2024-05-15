const express = require("express");
require("dotenv").config();

const PORT = process.env.PORT;
const connectToDb = require("./config/connectToDb");
const UserController = require("./controllers/userController");
const cors = require("cors");

//Create an express app
const app = express();

//Configure express app
app.use(express.json());
app.use(cors());

//Connect to database
connectToDb();

//Routing
app.get("/", (req, res) => {
  res.json({ hello: "world" });
});

app.post("/createUser", UserController.createUser);

app.get("/getAllUser", UserController.getAllUser);

app.get("/getUserDetails/:id", UserController.getUserDetails);

app.put("/updateUserDetails/:id", UserController.updateUser);

app.delete("/deleteUser/:id", UserController.deleteUser);

app.use("/*", async (req, res) => {
  return res.json({ message: "Page not found!" });
});

app.listen(PORT);
