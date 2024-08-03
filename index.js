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
import { userLoginSchema, userRegisterSchema } from "./app/validations/user-validation-schema.js"
import authenticateUser from "./app/middlewares/authenticate.js"
import notesCtrl from "./app/controllers/notes-ctrl.js"
const port = process.env.PORT || 3050
const app = express()
configureDB()


app.use(express.json())
app.use(cors())

// <Link to = "/users/register">Register</Link> should not be the same.
app.post("/api/users/register",checkSchema(userRegisterSchema),usersCtrl.register)
app.post("/api/users/login",checkSchema(userLoginSchema),usersCtrl.login)
app.get("/api/users/account",authenticateUser,usersCtrl.account)


app.get('/api/notes',authenticateUser,notesCtrl.list)
app.post('/api/notes',authenticateUser,notesCtrl.create)
app.get('/api/notes/:id',authenticateUser,notesCtrl.show)
app.put("/api/notes/:id",authenticateUser,notesCtrl.update)
app.delete("/api/notes/:id",authenticateUser,notesCtrl.delete)

app.listen(port,()=> {
    console.log("Server running on port" ,port)
})

