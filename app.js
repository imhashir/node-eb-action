const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
    res.send("Hellow World")
})

app.listen(port, ()=>{
    console.log("server running on port", port)
})
