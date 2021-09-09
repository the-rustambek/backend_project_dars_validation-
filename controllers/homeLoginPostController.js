const {compareHash} = require("../modules/bcrypt")
const {LoginValidation} =  require("../modules/validation")
const {createToken} = require("../modules/jwt")

module.exports = async function homeLoginPostController(req,res ){
    try {
        const data = await LoginValidation.validateAsync(req.body);

        const user =  await req.db.users.findOne({
            email:data.email,
        });

        if(!user) throw new Error("User not found");
        
        const isTrust = await compareHash(user.password,data.password);

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