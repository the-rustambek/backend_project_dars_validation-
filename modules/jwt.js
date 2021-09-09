const {sign,verify} = require("jsonwebtoken")

const SECRET_WORD = process.env.SECRET_WORD;

async function createToken(data) {
    return sign(data, SECRET_WORD, {
        expiresIn: "30d"
    })
}

async function validateToken(token){
    try{
        return  verify(token, SECRET_WORD);

    }
    catch(error){
        return false

    }
}
module.exports = {
    createToken,validateToken
}