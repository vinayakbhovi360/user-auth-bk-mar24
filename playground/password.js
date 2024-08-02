import bcryptjs from "bcryptjs"
const password = 'secret123'

//hash password - bcryptjs
async function register () {
    //salt
    const salt = await bcryptjs.genSalt()
    console.log(salt,salt.length)
    //hash
    const hash = await bcryptjs.hash(password,salt)
    // const hash = await bcryptjs.hash(password,"$2a$10$bvyhcIn056rfkY0b69MfCu")

    console.log(hash,hash.length)

}

register()
