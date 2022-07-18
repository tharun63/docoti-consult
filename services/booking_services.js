
import  Booking from "../models/booking.js";
import { ObjectId } from "mongodb";


export default class BookingService {
  createBookings(request) {
    
    
    return new Promise((resolve, reject) => {
      Booking.create(request.body)
        .then(creatingbooking=> {
          resolve(creatingbooking)
        }).catch(error => reject(error));
    })
  }
  GetAllBookings(request) {
    return new Promise((resolve,reject)=>{
      let matchQuery={}
      if(request.query.mobileno){
        matchQuery['mobileno']=request.query.mobileno
      }
      if(request.query.doctor_id){
        matchQuery['doctor_id']=request.query.doctor_id
      }
      if(request.query.date){
        matchQuery['date']=request.query.date
      }
      if(request.query.slot){
        matchQuery['slot']=request.query.slot
      }
      if(request.query.slot_id){
        matchQuery['slot_id']=request.query.slot_id
      } 
      Booking.find(matchQuery)
      .then(getallbookings=>{
        resolve(getallbookings)
      }).catch(error => reject(error));
    })
  }
  getOneBooking(request){
    return new Promise((resolve,reject)=>{
      Booking.findOne({_id:ObjectId(request.params.booking_id)})
      .then(getonebooking=>{
        resolve(getonebooking)
      }).catch(error=>reject(error));
    })
  }
  updateBooking(request){
    return new Promise((resolve,reject)=>{
      Booking.findOneAndUpdate({_id:ObjectId(request.params.booking_id)},{$set:request.body})
      .then(updateonebooking=>{
        resolve(updateonebooking)
      }).catch(error=>reject(error))
    })
  }
  deleteOneBooking(request){
    return new Promise((resolve,reject)=>{
      Booking.findOneAndRemove({_id:ObjectId(request.params.booking_id)})
      .then(deleteonebooking=>{
        resolve({message:"booking deleted successfully"})
      }).catch(error=>reject(error));
    })
  }
  
}
