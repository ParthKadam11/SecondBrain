import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { Request,Response,NextFunction } from "express"
dotenv.config()
const jwt_secret = process.env.JWT_SECRET

export const userAuth =(req:Request,res:Response,next:NextFunction)=>{
    const header=req.headers["authorization"]
    const decoded = jwt.verify(header as string,jwt_secret as string )   
    if(decoded){
        //@ts-ignore
        req.userId =decoded.id
        next()
    }else{
        res.status(403).json({
            message:"You are not Logged in!!"
        })
    }
}