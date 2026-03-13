import {Schema,model,Types} from 'mongoose'

//create cart schema {product,count}
const cartSchema=new Schema({
    product:{
        type:Schema.Types.ObjectId,
        ref:"product" //name of the product model
    },
    count:{
        type:Number,
        default:1
    }
})
//create user schema (username,password,email,age)
const userSchema =new Schema({
    //structure of user resource
    username:{
        type:String,
        required:[true,"username is required"],
        minLength:[4,"min length of username is 4 characters"],
        maxLength:[10,"username exceeds the 10 characters"],
        unique:[true,"username already existed"]
    },
    password:{
        type:String,
        required:[true,"password required"]
    },
    email:{
        type:String,
        required:[true,"email required"],
        unique:[true,"email already existed"]
    },
    age:{
        type:Number
    },
    cart:[cartSchema]
}, {
    versionKey:false,
    timestamps:true
})

//generate user model
export const userModel=model("user",userSchema)
