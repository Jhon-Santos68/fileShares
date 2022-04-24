import express from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db';
import fileRouter from './routes/files';
const app = express();
dotenv.config();
connectDB();


const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
  extended: true,
}))

app.use("/api/files", fileRouter)

app.get('/', (req, res) => {
  res.send('Salomlar hello!');
})


app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`)
});


console.log(process.env.MONGO_URL, 'rozgardi')
