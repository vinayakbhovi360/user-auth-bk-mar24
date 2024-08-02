import bcryptjs from "bcryptjs"
const hashPassword = '$2a$10$bvyhcIn056rfkY0b69MfCuY8LU5VLpCdOeikZr1qSldZsaR0/Orty'

const password = 'secret123'

async function login() {
    const salt = hashPassword.slice(0,29)
    console.log(salt)
    const hashAgain = await bcryptjs.hash(password,salt)
    console.log(hashAgain == hashPassword)

}
login()

async function login2() {
    const isAuth = await bcryptjs.compare(password,hashPassword)
    console.log(isAuth)

}

login2()