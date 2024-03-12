const express = require("express")
const dotenv=require('dotenv')
const cors = require("cors");
const morgan=require('morgan')
const connectDB=require('./config/database')
const authRoutes=require('./routes/authRoutes')
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
app.get('/',(req,res)=>{
    res.send("Server is running")
})

app.use("api/v1/auth",authRoutes);

// app.use('/api/v1/admin',require('./routes/adminRoutes'))
app.use("/api/v1/auth", require("./routes/authRoutes"));


app.listen(process.env.PORT||8080,console.log(`server is running on port ${process.env.PORT}`))