const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req, res){

  var num1 = Number(req.body.Number1);
  var num2 = Number(req.body.Number2);
  var result = num1/(num2*num2);
  res.send("Your BMI is = " + result);
});

app.listen(6500, function(){
  console.log("Server has strted on port 6500");
});
