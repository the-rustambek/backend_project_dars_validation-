const router = require("express").Router();

router.get("/",(req,res) =>{
    res.render("index");
})

module.exports = {
    router,
    path : "/",  // qaysi route orqali kirish
}

