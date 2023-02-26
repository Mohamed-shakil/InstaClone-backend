const express= require('express');
const route=express.Router();
const Post=require('../model/postSchema')
const {cloudinaryMod}=require('../utils/cloudinary');

route.get('/',async (req,res)=>{
   const result= await Post.find();
   res.send(result);
    
 
});

route.post('/post',async(req,res)=>{
let  {name,
location,
likes,
description,
PostImage,
date
}=req.body;
var upres;
// cloudinaryMod.uploader.upload(PostImage,{
//    folder:'sha',
//    upload_preset: 'ml_default'
// }).then((e)=>{upres=e.secure_url;console.log("uploded to cloud")}).catch((e)=>{console.log(e.message)})
upres=await cloudinaryMod.uploader.upload(PostImage,{
      folder:'sha',
       upload_preset: 'ml_default'
   })
console.log("upload to cloud")
const posts= new Post({name,
    location,
    likes,
    description,
    PostImage:upres.secure_url,
    date: new Date()
    })
    posts.save().then(()=>{console.log("registered ");res.send("success")}).catch((e)=>{console.log(e.message);res.send("failed")});

   });
module.exports=route;