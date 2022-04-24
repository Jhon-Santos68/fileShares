import mongoose from 'mongoose';
import dotenv from 'dotenv';


const url = "mongodb+srv://devbek:4abek5577@cluster0.ojqv5.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

// useNewUrlParser: true,
// useFindAndModify: true,

const connectDB = async () => {
  try {
    mongoose.connect(url);
  } catch (err) {
    console.log(`Connection Error`)
  }

  const connection = mongoose.connection;
  if (connection.readyState >= 1) {
    console.log(`Connect to database`)
    return;
  }

  connection.on('error', () => console.log(`conncet failed`))
}


export default connectDB;

