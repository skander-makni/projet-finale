const express = require("express");
const app = express();
require("dotenv").config();

const connectDB = require("./config/connectDB");
connectDB();
app.use(express.json());

app.use("/api/user/", require("./routes/user"));
app.use("/api/product/", require("./routes/products"));

const port = process.env.PORT;

app.listen(port, (error) => {
  error
    ? console.log("server is can not running")
    : console.log(`server is running on server ${port}`);
});
