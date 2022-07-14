
import SlotService  from "../services/slot_services.js";

export default class SlotController {
 
  addSlot(request, response, next) {
    
     SlotService.prototype
      .addSlot(request)
      .then(addslot => {
        response.json(addslot);
      })
      .catch(error => next(error));
  }

   getAllSlots(request,response,next){
     SlotService.prototype
      .getAllSlots(request)
      .then(getallslots => {
        response.json(getallslots);
      })
      .catch(error=>next(error));
   }

   getOneSlot(request,response,next){
    SlotService.prototype
     .getOneSlot(request)
     .then(getoneslot=> {
       response.json(getoneslot);
     })
     .catch(error=>next(error));
  }
  



  updateSlot(request,response,next){
    SlotService.prototype
      .updateSlot(request)
      .then(updateslot=> {
        response.json(updateslot);
      })
      .catch(error=>next(error));
  
  };

  deleteSlot(request,response,next){
   SlotService.prototype
     .deleteSlot(request)
     .then(deleteslot=>{
       response.json(deleteslot);
     })
     .catch(error=>next(error));
  };
}

