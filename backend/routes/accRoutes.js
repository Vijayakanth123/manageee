const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

//needed functions
const { accModel } = require('../models/accountModel');
const { signUp } = require('../controllers/accControllers');
const {checkUsername , validateHashPassword} = require('../middleware/acc_ware');
router.use(checkUsername);

// for /acc/login
router.post("/login",(req,res)=>{
    if(!req.body.userExists){
        console.log("username doesnt exist to login");
        res.send("username doesnt exist to login");
    }
});

//for /acc/signup
router.post("/signup",validateHashPassword,signUp);


module.exports = router;