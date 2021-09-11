const router = require("express").Router();

const homeSignUpPostController =  require("../controllers/homeSignUpPostController")
const homeLoginPostController =  require("../controllers/homeLoginPostController")


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
router.post("/login.html",homeLoginPostController)

router.post("/register.html",homeSignUpPostController);








module.exports = {
    router,
    path : "/",  // qaysi route orqali kirish
}

