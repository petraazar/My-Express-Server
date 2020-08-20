//jshint esversion:6

const express = require("express")

const app = express()

app.get("/", function(request, response){
    response.send("<h1>hello world</h1>")
})

app.get("/contact", function(req, res){
    res.send("contact me at yuhu@gmail.com")
})

app.get("/about", function(req, res){
    res.send("at yhu we care about our customers first")
})

app.get("/hobbies", function(req, res){
    res.send("<ul><li>reading</li><li>hiking</li><li>camping</li></ul>")
})

app.listen(3000, function(){
    console.log("server started on port 3000")
})

