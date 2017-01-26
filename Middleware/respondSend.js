/**
 * Created by saiful on 1/26/17.
 */
var express = require("express");
var app = express();
app.use(function (req,res,next) {
    res.send("get it");
    next();
});
app.listen(3000,function () {
   console.log("running 3000.....")
});