const mongoose = require("mongoose");
const accModel = require("../models/accountModel")
const bcrypt = require("bcrypt");

exports.signUp = function (req,res){
    //cheking if the username exists or not.
    if(req.body.userExists){
        console.log("username Taken");
        return res.send("username Taken");
    }
    
    //adding the account in db.
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

exports.login = function (req,res){
    if(!req.body.userExists){
        console.log("username is not registered");
        return res.send("username is not registered");
    }
}