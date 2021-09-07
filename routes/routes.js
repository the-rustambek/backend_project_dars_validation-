const homeRoute = require("./homeRoute")

module.exports = (server) =>{
    server.use(homeRoute.path, homeRoute.router);

    server.use((req,res) =>{
        res.render("error")
    })
}