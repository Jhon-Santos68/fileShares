import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
const connectDB = require('./config/db.ts');
const app = express();
dotenv.config();
connectDB();


const PORT = process.env.PORT;

app.use(cors())

app.get('/', (req, res) => {
  res.send('Salomlar hello!');
})


app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
});


console.log(process.env.MONGO_URL, 'ozgardi 2')