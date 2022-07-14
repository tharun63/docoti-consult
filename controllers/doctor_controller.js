import DoctorService from "../services/doctor_services.js";

export default class DoctorController {
 
  createDoctor(request, response, next) {
    
     DoctorService.prototype
      .createDoctor(request)
      .then(creatingdoctor => {
        response.json(creatingdoctor);
      })
      .catch(error => next(error));
  }

   getAllDoctors(request,response,next){
     DoctorService.prototype
      .getAllDoctors (request)
      .then(getalldoctors => {
        response.json(getalldoctors);
      })
      .catch(error=>next(error));
   }

   getDoctor(request,response,next){
  
    DoctorService.prototype
     .getOneDoctor(request)
     .then(getdoctor => {
       response.json(getdoctor);
     })
     .catch(error=>next(error));
  }
  



  updateDoctor(request,response,next){
    DoctorService.prototype
      .updateDoctor(request)
      .then(updatedoctor=> {
        response.json(updatedoctor);
      })
      .catch(error=>next(error));
  
  };

  deleteDoctor(request,response,next){
   DoctorService.prototype
     .deleteDoctor(request)
     .then(deletedoctor=>{
       response.json(deletedoctor);
     })
     .catch(error=>next(error));
  };
  }

