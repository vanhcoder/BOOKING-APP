const User = require('../../models/User')
const bcryptjs = require('bcryptjs');
const jwt  = require('jsonwebtoken')
const userController = {
    register :async function(req, res) {
        var salt = bcryptjs.genSaltSync(10);
        var hash = bcryptjs.hashSync(req.body.password, salt);
        try{
           const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
           });
           await newUser.save();
           res.status(200).json("create user successfully");  
    
        }catch(err){  
           res.status(500).json(err);
        }
    },
    login : async function(req, res) {
        try{
           const user = await User.findOne({username:req.body.username});
           if(!user) return res.status(404).send("login failed");
           const isPassword = await bcryptjs.compare(req.body.password , user.password);
           if(!isPassword) return res.status(404).send("password not match");
            
            const  token = jwt.sign({id : user._id , isAdmin : user.isAdmin } ,  process.env.JWT)
            
            const {password , isAdmin , ...otherDetails} = user._doc;

           res.cookie("assces_token", token , {
               httpOnly: true,
           }).status(200).json({...otherDetails});  
        }catch(err){  
           res.status(500).json(err);
        }
    }
}

module.exports = userController;