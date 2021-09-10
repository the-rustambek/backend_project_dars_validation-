const {compareHash} = require("../modules/bcrypt")
const {LoginValidation} =  require("../modules/validation")
const {createToken} = require("../modules/jwt")
const {SignUpValidation} = require("../modules/validation")
const {generateCrypt} = require("../modules/bcrypt")

module.exports = async function homeLoginPostController(req,res ){
    try {
        const data = await LoginValidation.validateAsync(req.body);
console.log(req.body)
        const user =  await req.db.users.findOne({
            email:data.email,
        });
        console.log(user)

        if(!user) throw new Error("User not found");
        
        const isTrust = await compareHash(data.password,user.password);
console.log(isTrust)
        if(!isTrust) throw new Error("Password is incorrect");

        const token = await createToken({
            id: user_id,
        });
        res.cookie("token",token).redirect("/");
    }
    catch(error){
        res.render("login",{
            error,
        });
    }  
};