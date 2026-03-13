//create express app
import exp from "express";
import { connect } from "mongoose";

//import APIs
import { userApp } from "./APIs/userAPI.js";
import { productApp } from "./APIs/productAPI.js";
import cookieParser from "cookie-parser";


const app = exp();


//parse incoming JSON requests
app.use(exp.json())
//add cookie parser middleware
app.use(cookieParser())

//JSON parse error handler
app.use((err,req,res,next)=>{
    console.log("error in parsing json : ",err);
    res.status(400).json({message:"invalid JSON"})
})


//forward request to user API
app.use("/user-api", userApp)

//forward request to product API
app.use("/product-api", productApp)


//connect to database server
async function connectDB(){
    try{

        await connect("mongodb://127.0.0.1:27017/backendDB")

        console.log("DB connection successful")

        //start server
        app.listen(4000,()=>console.log("server is running on port 4000...."))

    }catch(err){
        console.log("error in DB connection : ",err);
    }
}

connectDB();


//global error handling middleware
app.use((err,req,res,next)=>{

    //validation error
    if(err.name=='ValidationError'){
        return res.status(400).json({message:"error occured",error:err.message})
    }

    //cast error
    if(err.name=='CastError'){
        return res.status(400).json({message:"error occured",error:err.message})
    }

    //server error
    res.status(500).json({message:"error occured",error:"server error"})
})