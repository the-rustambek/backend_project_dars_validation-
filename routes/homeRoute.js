const router = require("express").Router();
const {SignUpValidation} = require("../modules/validation")

router.get(["/","/index.html"],(req,res) =>{
    // console.log(req.db);
    res.render("index");
})

router.get("/register.html",(req,res) =>{
    res.render("register");
})


router.get("/login.html",(req,res) =>{
    res.render("login");
})


router.post("/register.html",async (req,res) =>{
    // console.log(req.body)
    try{
        const data =  await SignUpValidation.validateAsync(req.body);
        console.log(data);
        res.redirect("/register.html");
    }
    catch(error){
        console.log(error);
        res.redirect("/register.html");
    }
    
    
});


module.exports = {
    router,
    path : "/",  // qaysi route orqali kirish
}

