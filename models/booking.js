"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingschema=new Schema(
  {
    doctorName:{
        type:String
    },
    doctor_id:{
      type:Schema.ObjectId
      
    },
    slot_id:Schema.ObjectId,
    speciality:{
      type:String
      
    },
    cost:{
      type:Number
    },
    date:String,
    slot:String,
    day:String,
    mobileno:{
      type:Number,
      unique:true
    }
    

  },
  
);
bookingschema.index({slot_id:1,doctor_id:1,date:1,slot:1},{unique:true})


export default mongoose.model("Booking", bookingschema);


