const homeRoute = require("./homeRoute")

module.exports = (server) =>{
    server.use(homeRoute.path, homeRoute.router);
}