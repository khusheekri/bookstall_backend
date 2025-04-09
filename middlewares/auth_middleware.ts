/**
 * @apiDescription Middleware to authenticate users before they can make requests to the server
 */
import jwt from "jsonwebtoken";

const authentication = async (req : any, res : any, next : Function)=>{
  
    try{
        if(!req.headers.authorization){
            res.status(401).json({message: "Authorization token is required"})
            return;
        }
        const token = req.headers.authorization.split(" ")[1];
        
        const user = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = user;
        next();
    }catch(error){
        console.error(error);
        res.status(401).json({message: "Invalid Token"})
    }
}

export default authentication;