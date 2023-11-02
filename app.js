const express = require('express')
const app = express()
const dotenv = require('dotenv')
dotenv.config({path:'./.env'})
const web = require('./routes/web')
const connectDB = require('./db/connectdb')
const fileupload = require("express-fileupload");
const cookieParser = require('cookie-parser')
const cors = require('cors')

//for api communication in react
app.use(cors())

//get token in auth 
app.use(cookieParser())

//for data get in api
app.use(express.json())

//for database
connectDB()

//tempp file uploader
app.use(fileupload({useTempFiles: true}));

//load route
app.use('/api',web)
//localhost:4000/api  =  { DEFAULT URL}

//server create
app.listen(process.env.PORT,()=>{
    console.log(`server running on localhost: ${process.env.PORT}`)
})