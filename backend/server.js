import express from 'express';
import cors from 'cors';
import 'dotenv/config'
import connectdb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRoute.js';
// App Config

const app = express();
const port = process.env.PORT || 4000;
connectdb()
connectCloudinary();
// Middlewares
app.use(express.json());
app.use(cors());
app.use('/api/user',userRouter)
app.use('/api/product',productRouter);

// api endpoints

app.get('/', (req,res)=>{
  res.send("API working");
})

app.listen(port,()=>console.log(`Server started at port: ${port}`));