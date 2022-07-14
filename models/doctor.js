"use strict";
import mongoose from 'mongoose';
const Schema=mongoose.Schema;
const slotSchema=new Schema(
    {
        slot:{
            type:String,
            required:true
        },
        day:String

})
const doctorSchema=new Schema(
    {
     name:{
        type:String,
        required:true
     },
     age:Number,
     experienceInYears:Number,
     category:String,
     speciality:String,
     slots:[slotSchema]
},
)
export default mongoose.model("Doctor",doctorSchema);