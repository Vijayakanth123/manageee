const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//needed functions
const { accModel } = require('../models/accountModel');
const { signUp,login } = require('../controllers/accControllers');
const {checkUsername , validateHashPassword , redirectIfAuthenticated } = require('../middleware/acc_ware');

// for /acc/login
router.post("/login",redirectIfAuthenticated,checkUsername,login);

//for /acc/signup
router.post("/signup",redirectIfAuthenticated,checkUsername,validateHashPassword,signUp);

module.exports = router;