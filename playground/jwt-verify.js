import jwt from "jsonwebtoken"
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoiam9obiIsImlhdCI6MTcyMjU5NzE3NywiZXhwIjoxNzIzMjAxOTc3fQ.tAtmbDvUIT2Sx6z3Hx2SkQzBf_loTZsOHMLaa-i7oTw'



try {
    const tokenData = jwt.verify(token, "dct@123")
    console.log(tokenData)


} catch (err) {
    console.log(err.message)

}


/*
    syntax Error
    Reference Error
    Module Error
    TypeError
    LogicalError
    RuntimeError

*/