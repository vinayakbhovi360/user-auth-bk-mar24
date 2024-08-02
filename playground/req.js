const req = {
    method : "get"
}

function f1 (req) {
    req.city = 'bangalore'
}

f1(req)
function f2 (req){
    console.log('f2',req.city)
}

f2(req)
console.log(req)