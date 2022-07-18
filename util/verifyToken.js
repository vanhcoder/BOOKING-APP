const jwt = require('jsonwebtoken');


const verifyToken = {
    checkToken  : async (req, res , next) => {  
        const token = req.cookies.assces_token;
        if(!token){
            return res.status(401).send("you are not authentication");
        }
        jwt.verify(token , process.env.JWT , (err , user )=>{
            if(err){
                return res.status(401).send("token is invalid");
            }
            req.user = user;
            next();
        })
    },
    checkUser : async (req , res , next )=>{
        checkToken(req , res , next , ()=>{
            if(req.user.id === req.params.id || req.user.isAdmin){
                next();
            }else{
                if(err) return next(res.status(401).send("you are not authentication"))
            }
        })
    },
    checkAdmin : async (req , res , next )=>{
        checkToken(req , res , next , ()=>{
            if(req.user.isAdmin){
                next();
            }else{
                if(err) return next(res.status(401).send("you are not authentication"))
            }
        })
    }

}
module.exports = verifyToken ;