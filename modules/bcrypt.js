const {genSalt, compare} = require("bcrypt")

async function generateCrypt(data){
    const salt = await genSalt(10);

    return await  hash(data, salt);
}

async function compareHash(hash,data){
    return compare(hash,data);
}

module.exports = {
    compareHash,
    generateCrypt,
}