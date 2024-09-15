const jwt = require('jsonwebtoken');
const JWT_SECRETE = "kahi";

function auth(req,res,next){
    try{
        const token = req.headers.token;

        const decodedata = jwt.verify(token,JWT_SECRETE);
    
        if(decodedata){
            req.userId = decodedata.id
            next();
        }else{
            res.status(403).json({
                message:"Incorrect credentials"
            })
        }

    }catch(e){
    console.error(e)
    }
}

module.exports={
    auth,
    JWT_SECRETE
}