import Doctor from '../models/doctor.js';
import { ObjectId } from "mongodb";


export default class DoctorService{
    createDoctor(request){
        return new Promise((resolve,reject)=>{
            Doctor.create(request.body)
            .then(creatingdoctor=>{
                resolve(creatingdoctor)
            }).catch(error=>reject(error))
        })
    }
    getAllDoctors(request) {
        return new Promise((resolve, reject) => {
          let matchQuery={}
          if(request.query.category){
            matchQuery['category']=request.query.category
          }
          if(request.query.speciality){
            matchQuery['speciality']=request.query.speciality
          }
          Doctor.find(matchQuery)
            .then(getalldoctors=> {
              resolve(getalldoctors)
            }).catch(error => reject(error));
        })
      }
      getOneDoctor(request) {
        return new Promise((resolve, reject) => {
          console.log(request)
      Doctor.findOne({_id:ObjectId(request.params.doctor_id)})
            .then(getonedoctor=> {          resolve(getonedoctor)
            }).catch(error => reject(error));
        })
      }
      updateDoctor(request) {
        return new Promise((resolve, reject) => {
      Doctor.findOneAndUpdate({_id:ObjectId(request.params.doctor_id)},{$set:request.body},{new:true})
            .then(updatingdoctordetails => { 
              resolve(updatingdoctordetails)
  
            }).catch(error => {
            console.log("error update",error);
            reject(error)});
            
        })
      }
      deleteDoctor(request) {
        return new Promise((resolve, reject) => {
      Doctor.findOneAndRemove({_id:ObjectId(request.params.doctor_id)})
            .then(deletingdoctor=> {          resolve(deletingdoctor)
            }).catch(error => reject(error));
        })
      }
}