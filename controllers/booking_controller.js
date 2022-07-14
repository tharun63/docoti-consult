import  BookingService  from "../services/booking_services.js";
export default class BookingController {
 
  createBooking(request, response, next) {
    
     BookingService .prototype
      .createBookings(request)
      .then(result => {
        response.json(result);
      })
      .catch(error => next(error));
  }
  getAllBookings(request,response,next){
    BookingService.prototype
    .GetAllBookings(request)
    .then(getallbookings=>{
      response.json(getallbookings);
    }).catch(error=>next(error));
  }
  getOneBooking(request,response,next){
    BookingService.prototype
    .getOneBooking(request)
    .then(getonebooking=>{
      response.json(getonebooking);
    }).catch(error=>next(error))
  }
  updateOneBooking(request,response,next){
    BookingService.prototype
    .updateBooking(request)
    .then(updateonebooking=>{
      response.json(updateonebooking);
    }).catch(error=>next(error))
  }
  deleteOneBooking(request,response,next){
    BookingService.prototype
    .deleteOneBooking(request)
    .then(deletedonebooking=>{
      response.json(deletedonebooking)
    }).catch(error=>next(error));
  }
}
