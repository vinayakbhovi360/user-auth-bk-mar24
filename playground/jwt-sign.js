import jwt from "jsonwebtoken"
const user = {id:1,username: 'john'}
const tokenData = {userId:user.id,username : user.username}
const token = jwt.sign(tokenData,'dct@123',{expiresIn:'7d'})
console.log(token)
console.log(jwt.verify(token,"dct@123"))