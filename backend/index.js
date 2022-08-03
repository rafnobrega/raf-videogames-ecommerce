const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const userRoute = require("./routes/user");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connection to database successful."))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json());

app.use("api/users", userRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Backend server is running on PORT ${PORT}`);
});
