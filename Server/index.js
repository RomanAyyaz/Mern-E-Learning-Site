require('./Database/db')
const express = require('express')
const path = require('path')
const app = express()
const port = process.env.PORT || 8000;
const cors = require('cors')
const UserRoute = require('./Routes/User/UserRoute')
const InstructorRoute = require('./Routes/Instructor/InstructorRoute')
const cookieParser = require('cookie-parser');

// Middlewares
app.use(express.static(path.resolve("./public")))
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(cookieParser())

//Starting the Server
app.listen(port,()=>{
    console.log(`Listening at port number ${port}`)
})

//Routes for Api
app.use('/user',UserRoute)
app.use('/instructor',InstructorRoute)