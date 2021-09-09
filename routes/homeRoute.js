const router = require("express").Router();

router.get(["/","/index.html"],(req,res) =>{
    res.render("index");
})

router.get("/register.html",(req,res) =>{
    res.render("register");
})


router.get("/login.html",(req,res) =>{
    res.render("login");
})


router.post("/register.html",(req,res) =>{
    console.log(req.body)
    res.redirect("/register");
})


module.exports = {
    router,
    path : "/",  // qaysi route orqali kirish
}

