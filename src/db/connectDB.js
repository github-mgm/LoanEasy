import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL,DB_OPTIONS={'dbName':'LoanEasy'}) => {
    try {
      await mongoose.connect(DATABASE_URL, DB_OPTIONS);
      console.log("Connected Successfully");
  
    } catch (err) {
      console.log("Error mila");
      console.log(err);
    }
  };
  export default connectDB