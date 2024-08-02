function generateSalt() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const salt = "asdfsdfadfasdfsdfasdfasdfasdfasdf"
            if (false) {
                resolve(salt)
            } else {
                reject(new Error('something went wrong'))
            }
        }, 1000)

    })
}

generateSalt()
    .then((salt) => {
        console.log(salt)
    })
    .catch((err) => {
        console.log(err.message)
    })


try {
    const salt = await generateSalt()
    console.log(salt)

}catch(err){
    console.log(err.message)
}
