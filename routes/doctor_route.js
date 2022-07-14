import express from "express";

import DoctorController from "../controllers/doctor_controller.js";
import SlotController from "../controllers/slot_controller.js";
const Router = express.Router();

Router
  .route("/")
  .post(DoctorController.prototype.createDoctor)
  .get(DoctorController.prototype.getAllDoctors)
Router
  .route("/:doctor_id")  
  .get(DoctorController.prototype.getDoctor)
  .put(DoctorController.prototype.updateDoctor)
  .delete(DoctorController.prototype.deleteDoctor)

Router
  .route("/:doctor_id/slots")  
  .post(SlotController.prototype.addSlot)
  .get(SlotController.prototype.getAllSlots)
  
Router
  .route("/:doctor_id/slots/:slot_id")  
  .get(SlotController.prototype.getOneSlot)
  .put(SlotController.prototype.updateSlot)
  .delete(SlotController.prototype.deleteSlot)
  
 export default Router;
