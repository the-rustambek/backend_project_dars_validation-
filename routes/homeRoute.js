const router = require("express").Router();

const homeSignUpPostController =  require("../controllers/homeSignUpPostController")
const homeLoginPostController =  require("../controllers/homeLoginPostController")
const adminMiddleware =  require("../middlewares/adminMiddleware")


router.get(["/","/index.html"],(req,res) =>{
    // console.log(req.db);
    res.render("index",{
        user:req.user,
    });
})

router.get("/register.html",(req,res) =>{
    res.render("register",{
        user:req.user,
    });
})


router.get("/login.html",(req,res) =>{
    res.render("login",{
        user:req.user,
    });
})

router.get("/admin",adminMiddleware, (req,res) =>{
    res.render("admin",{
            user:req.user,
    });
});

router.post("/login.html",homeLoginPostController)
router.post("/register.html",homeSignUpPostController);








module.exports = {
    router,
    path : "/",  // qaysi route orqali kirish
}

