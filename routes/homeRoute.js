const router = require("express").Router();
const {SignUpValidation} = require("../modules/validation")
const {generateCrypt} = require("../modules/bcrypt")
const homeSignUpPostController =  require("../controllers/homeSignUpPostController")

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


router.post("/register.html",homeSignUpPostController);








module.exports = {
    router,
    path : "/",  // qaysi route orqali kirish
}

