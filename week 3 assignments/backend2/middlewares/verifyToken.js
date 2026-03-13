import jwt from 'jsonwebtoken'
const{verify}=jwt

export function verifyToken(req,res,next){
    //token verification logic
    const token=req.cookies?.token;
    //if req from anauthorized user
    if(!token){
        return res.status(401).json({message:"please login"})
    }
    try{
        //if token is existed
        const decodedToken=verify(token,'abcdef')
        console.log(decodedToken);
        //attach decoded server to req
        req.user=decodedToken;
        //call next
        next()
    }catch(err){
        res.status(401).json({message:"session expired please re login"})
    }
}