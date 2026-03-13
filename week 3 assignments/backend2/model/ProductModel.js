import { Schema, model } from 'mongoose'
//create product schema
const productSchema = new Schema({
    productId:{
        type:Number,
        required:[true,"product id is required"],
        unique:[true,"product id already existed"]
    },
    productName:{
        type:String,
        required:[true,"product name required"]
    },
    price:{
        type:Number,
        required:[true,"price is required"],
        min:[10000,"minimum required price is 10000"],
        max:[500000,"maximum required price is 500000"]
    },
    brand:{
        type:String,
        required:[true,"brand is required"]
    }
},{
    versionKey:false,
    timestamps:true
})

//generate product model
export const productModel = model("product",productSchema)