module.exports = async function adminMiddleware(req,res,next){
    if(!req.user){
        res.redirect("/");
    }
    else{
        next();
    }
};

