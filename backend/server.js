const express = require("express");
const mongoose = require("mongoose");

//routes
const accRoutes = require("./routes/accRoutes");

//starting express instance and check
const app = express();
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));

//middle-ware
app.use(express.json());
app.use(express.static('../frontend')); // automatically serve files from that folder(without this both will run in different ports)
app.use('/api/acc',accRoutes);

// data-base connect and check
const url = "mongodb://127.0.0.1:27017/manageee";
mongoose.connect(url)
.then(() => console.log("Connected Successfully"))
.catch((e) => console.log(e));