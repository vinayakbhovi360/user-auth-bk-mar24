// git add .
// git commit -m 'user validation schema'
// git push -u origin main


export const userRegisterSchema = {
    email : {
        exists: {
            errorMessage : "email fied is required"
        },
        notEmpty : {
            errorMessage : "email is required"
        },
        isEmail : {
            errorMessage : "email should be valid format"
        },
        trim:true,
        normalizeEmail: true,

    },
    password : {
        exists : {
            errorMessage : "password field is required"
        },
        notEmpty : {
            errorMessage : "password connot be empty"
        },
        isStrongPassword : {
            options : {
                minLength : 8,
                maxLength : 128,
                minLowerCase : 1,
                minUpperCase : 1,
                minSymbol : 1,
                minNumber : 1,
            },
            errorMessage : "password should consits of atleast one lower case, one upper case, one symbol , one number and should be atleast 8 characters "
        },
        trim:true
    }
}

export const userLoginSchema = {}