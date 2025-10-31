import express from 'express';
import jwt from "jsonwebtoken"
import mongoose from 'mongoose';
import 'dotenv/config';
import {User,Content,Link,Tags} from "./db.js"
import { userAuth } from './middleware.js';
const app = express();
const jwt_secret =String(process.env.JWT_SECRET)
const port = Number(process.env.PORT ?? 3000);
const mongoURL = process.env.MONGO_URL;
app.use(express.json())

async function main(){
    if(!mongoURL){
        console.error("No MONGO_URL found in environment variables. Set MONGO_URL in .env");
        process.exit(1);
    }
    try{
        await mongoose.connect(mongoURL);
        app.listen(port, ()=>{
            console.log(`Server listening on port ${port}`)
            console.log("Connected To MongoDB")
        })
    }catch(err){
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
}

app.post("/api/v1/signup", async (req,res)=>{
    try{
        const {username,password}=req.body
        if(!username || !password) return res.status(400).json({message:'username and password required'})
        const user = await User.create({
            username:username,
            password:password
        })
        return res.status(201).json({
            message:`Signed Up with username ${username}`,
            userId: user._id
        })
    }
    catch(e:any){
        console.error('Signup error', e)
        return res.status(411).json({
            message:"SignUp Failed Duplicate User"
        })
    }
})

app.post("/api/v1/signin",async (req,res)=>{
    const {username,password} =req.body
    const existingUser = await User.findOne({
        username:username,
        password:password
    })
    if(existingUser){
        const token =jwt.sign({
            id:existingUser._id},jwt_secret)
        res.json({"token":token})
    }else{
        res.status(403).json({
            message:"Incorrect Credentials"
        })
    }
})

app.post("/api/v1/content",userAuth,async (req,res)=>{
    const {link,type,title} =req.body
    try{
    const content =await Content.create({
        link:link,
        tilte:title,
        userId:req.userId,
        tag:[]
    })
    res.json({
        message:"Content Added"
    })
    }
    catch(e){
        res.status(401).json({
            message:"No Content Created"
        })
        console.log(e)
    }

})

app.get("/api/v1/content",userAuth,async (req,res)=>{
    try{
    const userId=req.userId
    const content = await Content.find({
        userId:userId
    }).populate("userId","username")
    res.json({
       content 
    })
    }catch(e){
        res.status(409).json({
            message:"Content Not Found!"
        })
        console.log(e)
    }
})

app.delete("/api/v1/content",userAuth,async (req,res)=>{
    
    try{const contentId=req.body.contentId
        const deleteContent =await Content.deleteOne({
            _id:contentId,
            userId:req.userId
        })
        if(deleteContent){
            res.json({
            message:"Content Deleted"
        })
        }else{
            res.json({
                message:"Could Not Delete Content"
            })
        }
    }catch(e){
        res.status(409).json({
            message:"Content not Deleted"
        })
        console.log(e)
    }
})

main()
