//create mini express application
import exp from 'express'
import { Types } from 'mongoose'
import bcryptjs from 'bcryptjs'
const {hash,compare} = bcryptjs
export const userApp=exp.Router()
import { userModel } from '../model/UserModel.js'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
const{sign}=jwt

//define user REST API routes

//user login
userApp.post('/auth',async(req,res)=>{
    //get user cred obj from client
    const {email,password}=req.body;
    //verify email
    let user=await userModel.findOne({email:email})
    //if email not existed
    if(user==null){
        return res.status(400).json({message:"invalid email"})
    }
    //compare password
    let result =await compare(password,user.password)
    //if passwords not match
    if(!result){
        return res.status(400).json({message:"invalid password"})
    }
    //if passwords are matched
    //create token (jsonwebtoken -jwt --jaat)
    const signedToken=sign({email:user.email},"abcdef",{expiresIn:"1h"})
    //store token as http only cookie
    res.cookie("token",signedToken,{
        httpOnly:true,
        sameSite:"lax",
        secure:false
    })
    //send token in res
    res.status(200).json({message:"login success",payload:user})
})
    //create new user(protected)
    userApp.post("/users",async(req,res)=>{
        //get new user obj from required
        const newUser=req.body
        //hash the password
        const hashedPassword=await hash(newUser.password,10)
        //replace plain password with hashed password
        newUser.password=hashedPassword
        //create new user document
        const newUserDocument=new userModel(newUser)
        //save
        const result=await newUserDocument.save();
        console.log("result :",result)
        //send
        res.status(201).json({message:"user created"})
    });

    //read all users(protected)
    userApp.get("/users",verifyToken,async(req,res)=>{
        //get all user documents
        let usersList=await userModel.find()
        //send
        res.status(200).json({message:"users",payload:usersList})
    })

    //read a user by id(protected)

    userApp.get("/user",verifyToken,async(req,res)=>{
        //read user email from request
        const emailOfUser=req.user?.email;
        // console.log(emailOfUser)

        //find user by id
        const userObj=await userModel.findOne({email:emailOfUser}).populate("cart.product")
        //if user not found
        if(!userObj){
            res.status(404).json({message:"user not found"})
            return
        }
        //send response
        res.status(200).json({message:"user",payload:userObj})
       
    });

    //update a user by id(protected)

    userApp.put("/users/:id",verifyToken,async(req,res)=>{
        //get id from req params
        const id=req.params.id
        //validate if id is a valid ObjectId
        if(!Types.ObjectId.isValid(id)){
            res.status(400).json({message:"invalid user id format"})
            return
        }
        try {
            //get updated user obj from req body
            const ModifiesUser=req.body
            //find user document by id and update
            const updatedUser=await userModel.findByIdAndUpdate(id,{$set:{...ModifiesUser}},{new:true,runValidators:true})
            if(!updatedUser){
                res.status(404).json({message:"user not found"})
            } else {
                //send response
                res.status(200).json({message:"user updated",payload:updatedUser})
            }
        } catch(err) {
            console.log("error updating user: ",err)
            res.status(500).json({message:"error updating user"})
        }
    })

    //delete a user by id

    userApp.delete("/users/:id",verifyToken,async(req,res)=>{
        //get id from req params
        const id=req.params.id
        //validate if id is a valid ObjectId
        if(!Types.ObjectId.isValid(id)){
            res.status(400).json({message:"invalid user id format"})
            return
        }
        try {
            //find user document by id and delete
            const deletedUser=await userModel.findByIdAndDelete(id)
            if(!deletedUser){
                 return res.status(404).json({message:"user not found"})
            } else {
                //send response
                res.status(200).json({message:"user deleted",payload:deletedUser})
            }
        } catch(err) {
            console.log("error deleting user: ",err)
            res.status(500).json({message:"error deleting user"})
        }
    })

    //add product to the cart
    userApp.put("/cart/product-id/:pid",verifyToken,async(req,res)=>{
        try {
            //get product id from url param
            let productId=req.params.pid;
            //get current user details
            const emailOfUser=req.user?.email
            //add product to cart
            //before add first it should check the product is already in the cart or not
            //if product is already in the cart then increment the count by one
            //otherwise add the product to the cart
            let user=await userModel.findOne({email:emailOfUser})
            let productIndex=user.cart.findIndex(item=>item.product.toString()===productId)
            if(productIndex>-1){
                user.cart[productIndex].count++
            }
            let result = await userModel.findOneAndUpdate({email:emailOfUser},{$push:{cart:{product:productId}}});
            //if user is invalid 
            if(!result){
                return res.status(404).json({message:"user not found"})
            }
            res.status(200).json({message:"product added to cart",payload:result})
        } catch(err) {
            console.log("error adding product to cart: ",err)
            res.status(500).json({message:"error adding product to cart"})
        }
    })