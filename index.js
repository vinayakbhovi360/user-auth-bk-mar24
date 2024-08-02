// npm init -y
// npm install express cors mongoose express-validator
// npm install dotenv bcryptjs jsonwebtoken

// github
// git config --global user.email "vinayakbhovi360@gmail.com"
// git config --global user.name "vinayakbhovi360"

// git init
// git add .
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/vinayakbhovi360/user-auth-bk-mar24.git
// git push -u origin main



import express from "express"
import cors from "cors"
import dotenv from "dotenv"
dotenv.config()
import configureDB from "./config/db.js"
import usersCtrl from "./app/controllers/users-ctrl.js"
import { checkSchema } from "express-validator"
import { userRegisterSchema } from "./app/validations/user-validation-schema.js"
const port = process.env.PORT || 3050
const app = express()
configureDB()


app.use(express.json())
app.use(cors())

// <Link to = "/users/register">Register</Link> should not be the same.
app.post("/api/users/register",checkSchema(userRegisterSchema),usersCtrl.register)


app.listen(port,()=> {
    console.log("Server running on port" ,port)
})

