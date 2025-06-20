import { connect } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
//! Export the MONGODB_URI from the envirenment variables
const MONGODB_URI = process.env.MONGODB_URI;
//! EXPORT the DB_NAME that you put in .env file 
const DB_NAME = process.env.DB_NAME;

async function dbConnect() {
    try {
        await connect(MONGODB_URI, {
            dbName: DB_NAME,
        });
        console.log(`Pinged your deployment. You successfully connected to MongoDB! Database: ${DB_NAME}`);
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export default dbConnect;