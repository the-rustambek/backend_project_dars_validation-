require("dotenv").config();

const express = require("express");
const server =  express();
const PORT = process.env.PORT || 3333;
const cookieParser = require("cookie-parser");
const path = require("path");
const routes =  require("./routes/routes");
const mongodb = require("./modules/mongo");
const userMiddleware = require("./middlewares/userMiddleware");

server.listen(PORT, () =>{
    console.log(`Server Ready at ${PORT}`);
});


server.use(express.json());
server.use(express.urlencoded({
    extended:true,
}));

server.use(cookieParser());
server.use(express.static(path.join(__dirname, "public")));

server.set("view engine", "ejs");




(async () =>{
    const db = await mongodb();
try {
    server.use((req,res,next)=>{
        req.db = db;
        next();
        
    });
    server.use(userMiddleware);
    } 
    catch (error) {
    console.log(error)
    }
    finally{
    routes(server);
    }
})();