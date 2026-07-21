exports.checkUsername =   function (req,res,next){
    //check if input is given
    if(!req.body.username){
        console.log("NO USERNAME INPUT GIVEN TO CHECK");
        return res.send("NO USERNAME INPUT GIVEN TO CHECK");
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