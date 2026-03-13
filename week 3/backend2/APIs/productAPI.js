//create mini express application
import exp from 'express'
import { isValidObjectId } from 'mongoose'
export const productApp = exp.Router()

import { productModel } from '../model/ProductModel.js'


//CREATE PRODUCT
productApp.post("/products", async (req,res)=>{
    try{
        //get product obj
        const newProduct = req.body

        const newProductDocument = new productModel(newProduct)

        const result = await newProductDocument.save()

        res.status(201).json({
            message:"product created",
            payload:result
        })

    }catch(err){
        console.log(err)
        res.status(500).json({message:"error creating product"})
    }
})


//READ ALL PRODUCTS
productApp.get("/products", async (req,res)=>{

    const productsList = await productModel.find()

    res.status(200).json({
        message:"products",
        payload:productsList
    })
})


//READ PRODUCT BY productId
productApp.get("/products/:productId", async (req,res)=>{
    const productId = req.params.productId

    // 1. Try search by _id if it's a valid hex string
    if (isValidObjectId(productId)) {
        const productById = await productModel.findById(productId);
        if (productById) {
            return res.status(200).json({
                message: "product find by _id",
                payload: productById
            });
        }
    }

    // 2. Try search by custom productId if it's numeric
    if (!isNaN(productId)) {
        const productByCustomId = await productModel.findOne({ productId: productId });
        if (productByCustomId) {
            return res.status(200).json({
                message: "product find by custom productId",
                payload: productByCustomId
            });
        }
    }

    // 3. Not found
    res.status(404).json({ message: "product not found" });
})


//UPDATE PRODUCT BY productId
productApp.put("/products/:productId", async (req,res)=>{
    try{

        const productId = req.params.productId
        const modifiedProduct = req.body
        let updatedProduct;

        // Try by _id first
        if (isValidObjectId(productId)) {
            updatedProduct = await productModel.findByIdAndUpdate(
                productId,
                { $set: { ...modifiedProduct } },
                { new: true, runValidators: true }
            );
        }

        // Try by custom productId if not found or not an ObjectId
        if (!updatedProduct && !isNaN(productId)) {
            updatedProduct = await productModel.findOneAndUpdate(
                { productId: productId },
                { $set: { ...modifiedProduct } },
                { new: true, runValidators: true }
            );
        }

        if(!updatedProduct){
            return res.status(404).json({message:"product not found"})
        }

        res.status(200).json({
            message:"product updated",
            payload:updatedProduct
        })

    }catch(err){
        console.log(err)
        res.status(500).json({message:"error updating product"})
    }
})


//DELETE PRODUCT BY productId
productApp.delete("/products/:productId", async (req,res)=>{
    try{

        const productId = req.params.productId
        let deletedProduct;

        // Try by _id first
        if (isValidObjectId(productId)) {
            deletedProduct = await productModel.findByIdAndDelete(productId);
        }

        // Try by custom productId if not found or not an ObjectId
        if (!deletedProduct && !isNaN(productId)) {
            deletedProduct = await productModel.findOneAndDelete({ productId: productId });
        }

        if(!deletedProduct){
            return res.status(404).json({message:"product not found"})
        }

        res.status(200).json({
            message:"product deleted",
            payload:deletedProduct
        })

    }catch(err){
        console.log(err)
        res.status(500).json({message:"error deleting product"})
    }
})