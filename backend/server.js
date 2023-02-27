const express = require("express");
const dotenv = require("dotenv").config();
const colors = require("colors");
const connectDB = require("./config/db");
const port = process.env.Port || 2002;


connectDB();

const app = express();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));


app.use(express.json());
app.use(express.urlencoded());

app.use("/api/Admin", require("./routs/adminRouts"));


app.listen(port, () => console.log(`server started on port ${port}`));
