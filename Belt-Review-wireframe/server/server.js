import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbConnect from  './config/mongoose.config.js';
import router from './routes/Notes.route.js';

//! create an object from express built-in class
const app = express();

//! Middlewares 
app.use(express.json());
app.use(cors());

dotenv.config();

//! Define the Port from the envirenment veriables
const PORT = process.env.PORT 

//! connect to the database
dbConnect();

//! Middlewares for route
app.use('/api', router );

//! run the server 
app.listen(PORT,() => {
    console.log(`server is running on port ${PORT}`);
})
