const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//needed functions
const { accModel } = require('../models/accountModel');
const { signUp,login } = require('../controllers/accControllers');
const {checkUsername , validateHashPassword} = require('../middleware/acc_ware');
//validateHashPassword validates the password and hashes it in the req.body.password.

// for /acc/login
router.post("/login",checkUsername,login);

//for /acc/signup
router.post("/signup",checkUsername,validateHashPassword,signUp);


module.exports = router;