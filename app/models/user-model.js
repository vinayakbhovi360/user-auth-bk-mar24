// git add .              
// git commit -m 'user-model'
// git push origin main  

import { Schema,model } from "mongoose";

const userSchema = new Schema ({
    email: String,
    password : String,
},{timestamps:true})

const User = model("User",userSchema)

export default User