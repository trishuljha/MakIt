import mongoose, { Schema ,Types,model } from "mongoose";
const schema=new Schema({
    status:{
        type:String,
        default:"pending",
        enum:["pending","acccepted","rejected"],
    },
  
  
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
        
    },
    reciver:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
    },
  
},
{
    timestamps:true,
});

export const Request = mongoose.models.Request || model("Request",schema);
