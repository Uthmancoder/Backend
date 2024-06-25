const express = require("express");
const app = express();
const env = require("dotenv").config();
const UserRouter = require("./routes/UserRoutes");
const connectDb = require("./Config/DbConfig");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
connectDb();
app.use(UserRouter);

app.listen(3500, () => {
  console.log("App is running on port 3500");
});
