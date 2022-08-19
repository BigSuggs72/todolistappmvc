//MayanWolfe VOD at 7:00 pm on 8/17/2022: Let's Practice MVC! #100Devs - Class 46 on 8/16/2022

// DECLARED VARIABLES
const express = require('express')
const app = express()
const PORT = 8500
const mongoose = require('mongoose')
const connectDB = require('./config/database')
// const TodoTask = require ('./models/todotask')
const homeRoutes = require('./routes/home')
const editRoutes = require('./routes/edit')
require('dotenv').config({path: './config/.env'})


connectDB()


//SET MIDDLEWARE
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))


// Set Routes
app.use('/', homeRoutes)
app.use('/edit', editRoutes)


//SET UP LOCALHOST ON PORT
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is active!!!`)
})


