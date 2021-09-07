require("dotenv").config();

const express = require("express");
const server =  express();
const PORT = process.env.PORT || 3030;

server.listen(PORT, () =>{
    console.log(`Server Ready at ${PORT}`);
});

