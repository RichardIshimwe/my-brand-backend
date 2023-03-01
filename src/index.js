import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import allRoutes from './routes/all.routes.js'
import cors from 'cors';
import cookieParser from 'cookie-parser';
import response from './utils/response.util.js';

const app = express();
dotenv.config();
app.use(cors());
app.use(cookieParser())
app.use(bodyParser.json())
app.get('/',(req, res) => response.success(res, 200,"welcome to the back-end of my project"));
app.use(allRoutes);
const port = process.env.PORT;
mongoose.set('strictQuery', true);

const con = () => mongoose.connect(`${process.env.MONGODBURL}`, { useNewUrlParser: true, useUnifiedTopology: true });
const listen = () => app.listen(port)

// Promise.all([con()])
Promise.all([con(),listen()])
    .then(() => {
    //  console.log(`mongodb connected and app lisening at http://localhost:${port}`)
    })
    .catch((error) => {return response.error(res, 500, "internal server erro")})

export default app