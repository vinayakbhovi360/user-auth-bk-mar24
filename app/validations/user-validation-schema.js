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
    password : {}
}

export const userLoginSchema = {}