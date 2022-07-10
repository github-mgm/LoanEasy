import mongoose from 'mongoose';
import {MAHAK, DATABASE_URL} from './connectDB';

const connectDB = async (DATABASE_URL) => {
    try {
  
      const DB_OPTIONS = {
        dbName : 'loans'
      }
  
      await mongoose.connect(DATABASE_URL, DB_OPTIONS);
      console.log("Connected Successfully");
  
    } catch (err) {
      console.log("Error mila");
      console.log(err);
    }
  };