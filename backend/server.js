const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

dotenv.config();

//routes
const accRoutes = require("./routes/accRoutes");

//starting express instance and check
const app = express();

//middle-ware
app.use(cors({
  origin: "http://localhost:5173", 
  credentials: true 
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api/acc',accRoutes);

// data-base connect and check
const url = "mongodb://127.0.0.1:27017/manageee";
mongoose.connect(url)
.then(() => console.log("Connected Successfully"))
.catch((e) => console.log(e));

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on: ${PORT}`));