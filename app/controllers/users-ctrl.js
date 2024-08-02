// git app .
// git commit -m "users controller -register action"
// git push origin main


import User from "../models/user-model.js";
import { validationResult } from "express-validator";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken";
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

usersCtrl.login = async (req,res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {email,password} = req.body
    try{
        const user = await User.findOne({email:email})
        if(!user) {
            return res.status(404).json({errors : "invalid email/password"})
        }
        const isValid = await bcryptjs.compare(password,user.password)
        if(!isValid){
            return res.status(404).json({errors : "invalid email/password"})
        }
        const tokenData = {userId : user._id}
        const token = jwt.sign(tokenData,process.env.JWT_SECRET,{expiresIn:'7d'})
        res.status(200).json({token : token})

    }catch(err){
        console.log(err)
        res.status(500).json({errors : "something went Wrong"})

    }

}

usersCtrl.account = async (req,res) => {
    //verifying token
    //send the data
    try{
        const user = await User.findById(req.userId)
        res.status(200).json(user)

    }catch(err){
        console.log(err)
        res.status(500).json({errors : "something went Wrong"})
    }
}







export default usersCtrl