require("dotenv").config();
const passport = require("passport");
const express = require("express");
const session = require("express-session");
const { userRouter } = require("./src/routes/user");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
require("./src/controller/passport-config");

app.use(cors());
app.use(express.json());
dotenv.config();

const port=process.env.PORT
app.get("/", (req, res) => {
  res.send("This is the app");
});

app.use("/welcome", express.static("./src/uploads"), userRouter);

app.listen(port, () => {
  console.log(`Port is running is running on ${port}`);
});