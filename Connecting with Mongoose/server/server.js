import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnect from './config/mongoose.config.js';
const app = express();
app.use(express.json());
const PORT = process.env.PORT;
dbConnect();

app.listen(PORT, () =>
    console.log(`Listening on port: ${PORT}`)
);