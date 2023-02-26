const mongoose=require('mongoose')

const postSchema=new mongoose.Schema({
name:String,
location:String,
likes:Number,
description:String,
PostImage: Object,
date: Date,
},{timestamps:true}
)

const Post=mongoose.model('POST',postSchema);

module.exports=Post