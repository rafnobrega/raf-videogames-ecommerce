const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection to database successfull."))
  .catch((err) => {
    console.log(err);
  });

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backend server is running on PORT ${PORT}`);
});
