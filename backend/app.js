const express = require("express")
const dotenv=require('dotenv')
const cors = require("cors");
const morgan=require('morgan')
const connectDB=require('./config/database')

//dot config
dotenv.config();

//mongodb connection
connectDB()

//rest object
const app = express()

// Middleware
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
app.use(morgan('dev'))


//Routes

app.use("/auth", require("./routes/authRoutes"));
// app.use('/api/v1/admin',require('./routes/adminRoutes'))
app.use('/admin',require('./routes/sidebarRoutes'))


app.listen(process.env.PORT||8080,console.log(`server is running on port ${process.env.PORT}`))