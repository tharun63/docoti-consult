import Doctor from "../models/doctor.js";
import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { response } from "express";

  export default class SlotService {
    addSlot(request) {
      return new Promise((resolve, reject) => {
        Doctor.findOneAndUpdate({_id:request.params.doctor_id},{$push:{slots:request.body}})
        .then(addslot => {
          resolve(addslot)
        }).catch(error => reject(error));
    
      })
    }
    getAllSlots(request) {
      return new Promise((resolve, reject) => {
    Doctor.findOne({_id:request.params.doctor_id},{slots:1})
          .then(getallslots=> {
             resolve(getallslots);
          }).catch(error => reject(error));
      })
    }
    getOneSlot(request) {
      return new Promise((resolve, reject) => {
    Doctor.findOne({'_id': ObjectId(request.params.doctor_id)}, {slots: {$elemMatch: {_id: ObjectId(request.params.slot_id)}}},{slots:1,_id:0})
        
      
    .then(getoneslot=> {          resolve(getoneslot)
          }).catch(error =>
            {console.log(error) 
            reject(error)});
      })
    }
    deleteSlot(request) {
      return new Promise((resolve, reject) => {

    Doctor.findOneAndUpdate({_id:request.params.doctor_id},{$pull:{slots:{_id:mongoose.Types.ObjectId(request.params.slot_id)}}},function(err,result){
      if(!err){
      }else {
        console.log('error in deletion');
        //response.redirect("/")
      }
    })
          .then(deleteslot=> { 
            //console.log("deletemember",deletemember);
            resolve(deleteslot)
          }).catch(error => reject(error));
      })
    }
    }