require('dotenv').config(); // importing .env

const express = require('express') // import express
const app = express()
const port = 3000
const cors = require('cors')


const connectDb = require('./config/db')
connectDb()
const router = require('./routes');
const { handleError } = require('./utils/error');
const cookieParser = require('cookie-parser');


  app.use(cors({                     
  origin:true,
  credentials:true, // accepeting cookies
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS' ,'PATCH'],
}  
))
app.use(express.json()) // transforming json data to normal data ( json is format that is used to send data from backend to frontend and frontto backend)

app.use('/api',router)
app.use(handleError)
app.use(cookieParser);



app.get('/', (req, res) => {   //1st code to run after we sent a rqst to httplocalhoat3000
  res.send('Hello World!')
})
app.listen(port,()=>console.log("server running on port 3000")) 



