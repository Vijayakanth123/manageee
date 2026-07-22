const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

exports.checkUsername =   function (req,res,next){
    //check if input is given and if it is valid.
    if(!req.body.username){
        console.log("NO USERNAME INPUT GIVEN TO CHECK");
        return res.send("NO USERNAME INPUT GIVEN TO CHECK");
    }

    if(req.body.username.length < 3 || req.body.username.length > 16){
        console.log("username must be between 3 and 16 characters");
        return res.send("username must be between 3 and 16 characters");
    }

    for(let i = 0; i < req.body.username.length; i++){
        const charCode = req.body.username.charCodeAt(i);
        if(!((charCode >= 48 && charCode <= 57) || (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))){
            console.log("username must only contain alphanumeric characters");
            return res.send("username must only contain alphanumeric characters");
        }
    }

    //adds if the username already exists or not in the req.body
    mongoose.model("Account").exists({username: req.body.username})
    .then((exists) => {
        req.body.userExists = Boolean(exists);
        next();
    })
    .catch((err)=>{
        console.log(`error in acc_ware.js\n${err}`);
        next(err);
    })
}

exports.validateHashPassword = function(req,res,next){
    if(!req.body.password){
        console.log("password not present");
        return res.send("password is required");
    }
    //regex pattern,, atleast 1 uppercase + 1 number , size of 5-12 both included
    const pattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{5,12}$/;
    if(!pattern.test(req.body.password)){
        console.log("doesnt match requirements");
        return res.send("doesnt match requirements");
    }

    bcrypt.hash(req.body.password,6)
    .then((passwordHased) => {
        req.body.password=passwordHased;
        next();
    })
    .catch((err) => {
        console.log("error in bcrypt");
        next(err);
    })
}