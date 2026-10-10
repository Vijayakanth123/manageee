const mongoose = require("mongoose");
const accModel = require("../models/accountModel")
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const ACCESS_SECRET = process.env.JWT_ACCESS_SECRET || 'your_access_secret_key';
const REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || 'your_refresh_secret_key';

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

    accModel.findOne({username : req.body.username}).lean()
    .then((doc) => {
        return bcrypt.compare(req.body.password,doc.password_hashed);
    })
    .then((isCorrect) => {
        if(isCorrect){
            console.log("login sucessfull");
            const userData = { username: req.body.username, role: 'user' };

            // 2. Generate short-lived Access Token and long-lived Refresh Token
            const accessToken = jwt.sign(userData, ACCESS_SECRET, { expiresIn: '15m' });
            const refreshToken = jwt.sign(userData, REFRESH_SECRET, { expiresIn: '7d' });

            // 3. Set the tokens inside secure HttpOnly cookies
            const isProduction = process.env.NODE_ENV === 'production';

            res.cookie('accessToken', accessToken, {
                httpOnly: true,
                secure: isProduction, // Requires HTTPS in production
                sameSite: 'lax',
                maxAge: 15 * 60 * 1000 // 15 minutes
            });

            res.cookie('refreshToken', refreshToken, {
                httpOnly: true,
                secure: isProduction,
                sameSite: 'lax',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            // 4. Send non-sensitive user profile back to React state
            return res.status(200).json({
                success: true,
                message: 'Logged in successfully',
                user: { id: userData.id, email: userData.email, role: userData.role }
            });

        }else {
            console.log("incorrect password");
            res.status(401).send("incorrect password");
        }
    })
    .catch((err) => console.log("error in login function/controllers"));
    
}