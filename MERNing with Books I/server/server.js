import dotenv from 'dotenv';
import express from 'express';
import dbConnect from './config/mongoose.config.js';
import router from './routes/book.routes.js';

const app = express();
app.use(express.json());
dotenv.config();
const PORT = process.env.PORT;
dbConnect();

//! Middlewares for Route
app.use("/api",router)

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);
