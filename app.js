import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
//import {} from 'dotenv/config';
import dotenv from "dotenv";
//import routes
import DoctorRoute from './routes/doctor_route.js';
import BookingRoute from './routes/booking_route.js';

const app = express();
dotenv.config();


//database connection

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true
}).then(() => {
    console.log("DB connected");
}).catch(err=>{
    console.log('Database not connected'+err)
})

const port = process.env.PORT;

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use('/doctors',DoctorRoute);
app.use('/bookings',BookingRoute);
//server connection
app.get('/',(req,res)=>{
    res.send("welcome to find a doctor app")
    
})
app.listen(port, () => {
    console.log(`servers is running on port ${port}`);
});
