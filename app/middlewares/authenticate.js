/* Middle ware 
 1. write any Code
 2. end a req res cycle
 3. modify the req,res object.
*/

import jwt from "jsonwebtoken"
const authenticateUser = (req,res,next) => {
    const token = req.headers["authorization"]// any name can be given. but should be same as postman headers.
    if(!token) {
        return res.status(401).json({error:"token is required"})
    }
    try{
        const tokenData = jwt.verify(token,process.env.JWT_SECRET)
        console.log("td",tokenData)
        req.userId = tokenData.userId
        next()

    }catch(err){
        return res.status(401).json({error:err.message})


    }




}

export default authenticateUser