const router = require("express").Router();
const {SignUpValidation} = require("../modules/validation")
const {generateCrypt} = require("../modules/bcrypt")

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
        // console.log(data);
        let user = await req.db.users.findOne({
            email: data.email.toLowerCase(),
        });

        if(user) throw new Error("Email already exists")   // kodni shu qismida otvoradi bundan keyingi qismi ishlamayadi errorni keyin catch bilan ushlab oladi

        user = await req.db.users.insertOne({
            ...data,
            password: await generateCrypt(data.password)
        });
        console.log(user)
        res.redirect("/login.html");
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

