const express= require('express');
const cors=require('cors')
const app=express();
const mongoose=require('mongoose');
const Post=require('./model/postSchema');
const {cloudinaryMod}=require('./utils/cloudinary');

const connstr='mongodb+srv://Sha:sha10xkil@cluster0.nuo3ux3.mongodb.net/?retryWrites=true&w=majority';
app.use(cors({
    origin:'http://localhost:3000',
    methods:["GET","POST"]
}))
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb',extended:true}));
mongoose.set('strictQuery', true);
mongoose.connect(connstr,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{console.log("connected")}).catch((e)=>{console.log(e.message)})
app.use(express.json());
app.use(require('./routes/routing.js'))


app.listen(process.env.PORT||8080,()=>{console.log("server at 8080")})