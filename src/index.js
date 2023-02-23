import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv  from 'dotenv';
import allRoutes from './routes/all.routes.js'

const app = express();
dotenv.config();
const port = process.env.PORT;
mongoose.set('strictQuery', true);

mongoose.connect(`mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSCODE}@cluster0.hxne8xj.mongodb.net/?retryWrites=true&w=majority`,{useNewUrlParser:true,useUnifiedTopology:true})
.then(() => {
app.use(bodyParser.json())
app.use(allRoutes);
console.log("connected succefull")})
.catch(err => console.err("unable to connect",err));

app.listen(port, () => console.log(`server running at http://localhost:${port}`))
