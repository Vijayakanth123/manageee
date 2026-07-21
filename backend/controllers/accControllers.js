const mongoose = require("mongoose");
const accModel = require("../models/accountModel")

//new account data is saved inside the database collection accounts.
exports.signUp = function (req,res){
    if(req.body.userExists){
        console.log("username Taken");
        return res.send("username Taken");
    }
    const doc = new accModel({username : req.body.username,password_hashed: req.body.password});
    doc.save()
    .then(() => {
        console.log("signup successful");
        res.send("signup successful");
    })
    .catch((err) => {
        console.log(err);
        res.send("Error occurred while signing up");
    });
}