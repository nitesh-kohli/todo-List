
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/views/date.js");


const app = express();
let items =[];
let workItems = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended:true}));
app.use(express.static("public"));

 
app.get("/",function(req,res){
   
let day = date.getDate();


    res.render("list",{listTitle:day,newListItems:items});
});

app.post("/",function(req,res){
   
    let item = req.body.newItem;

    if(req.body.list === "work"){
        workItems.push(item);
        res.redirect("/work");
    }else{
        items.push(item);
        res.redirect("/");
    }

   
    
   
});

app.get("/work",function(req,res){
    res.render("list",{listTitle:"work",newListItems:workItems})
});

app.get("/about",function(req,res){
    res.render("about");
});

app.post("/work",function(req,res){
    let item = req.body.list;
    console.log(item);
    workItems.push(item);
    res.redirect("/work");
});














app.listen(3000,function(){
    console.log("server running on port 3000");
});
