import mongoose from "mongoose"
const Schema=mongoose.Schema
const ObjectId=mongoose.Types.ObjectId

const ContentType=["image","video","article","audio"]

const UserSchema = new Schema({
    username:{type:String,unique:true,require:true},
    password:{type:String,require:true}
})

const ContentSchema = new Schema({
    link:{type:String,require:true},
    type:{type:String,enum:ContentType,require:true},
    tilte:{type:String,require:true},
    userId:{type:ObjectId,ref:"User",require:true},
    tag:[{type:ObjectId,ref:"tag"}]
})

const TagsSchema= new Schema({
    title:{type:String,require:true,unique:true}
})

const LinkSchema = new Schema({
    hash:{type:String,require:true},
    userId:{type:ObjectId,ref:"user",require:true}
})

export const User=mongoose.model("User",UserSchema)
export const Content=mongoose.model("Content",ContentSchema)
export const Tags =mongoose.model("Tag",TagsSchema)
export const Link=mongoose.model("Link",LinkSchema)

