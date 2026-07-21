const express = require("express");
const router = express.Router();

router.post("/acc",(req,res)=>{
    res.send("meh recieved");
});

module.exports = router;