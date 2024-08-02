// git app .
// git commit -m "users controller -register action"
// git push origin main


import User from "../models/user-model.js";
import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs"
const usersCtrl  = {}

usersCtrl.register = async (req,res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()){
        return res.status (400).json({errors : errors.array()})
    }
    const body = req.body
    try{
        const user = new User(body)
        console.log(user)
        //salt
        const salt = await bcryptjs.genSalt()// rounds 10 by diffult it will shuffle for 10 times.
        //hash
        const hash = await bcryptjs.hash(user.password,salt)
        //update the user
        user.password = hash
        await user.save()
        res.status(201).json(user)

    }catch(err){
        console.log(err)
        res.status(500).json({errors : "something went Wrong"})

    }
}



export default usersCtrl