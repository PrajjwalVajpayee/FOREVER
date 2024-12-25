import express from 'express';
import cors from 'cors';
import 'dotenv/config'

// App Config

const app = express();
const port = process.env.PORT || 4000;

// Middlewares
app.use(express.json());
app.use(cors());

// api endpoints

app.get('/', (req,res)=>{
  res.send("API working");
})

app.listen(port,()=>console.log(`Server started at port: ${port}`));