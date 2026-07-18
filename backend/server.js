const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

const url = "mongodb://127.0.0.1:27017/manageee";

mongoose.connect(url)
    .then(() => console.log("Connected Successfully"))
    .catch((e) => console.log(e));

const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on: ${PORT}`));