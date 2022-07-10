import mongoose from 'mongoose';
import DATABASE_URL from '../constant.js';


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
  export default connectDB