import mongoose from "mongoose";
mongoose.pluralize(null);
const createUserModel = new mongoose.Schema({
    firstName:{
        type:String,  
    },
    lastName:{
        type:String,
        
    },
    email:{
        type:String,
    },
    password:{
        type:String
    },
    userId:{
        type:String
    }
   
})


export default mongoose.model("createUser",createUserModel ,"createUser");