// npm init -y
// npm install express cors mongoose express-validator
// npm install dotenv bcryptjs jsonwebtoken

import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import configureDB from "./config/db.js"

const port = process.env.PORT || 3050

const app = express()
configureDB()


app.use(express.json())
app.use(cors())


app.listen(port,()=> {
    console.log("Server running on port" ,port)
})