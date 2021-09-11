const {validateToken} =  require("../modules/jwt")

module.exports =  async function userMiddleware(req,res,next){
    if(!req.cookies.token){
        next();
    }    else{
        const isTrust  = await  validateToken(req.cookies.token);

        if(!isTrust){
            next();
        }
        else{
            req.user  = isTrust;
            next();
        }
    }

}