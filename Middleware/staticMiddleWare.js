/**
 * Created by saiful on 1/27/17.
 */
var express = require("express"),
    app = express(),
    path = require("path");

var staticPath = path.join(__dirname,"static");
app.use(express.static(staticPath));//similer to what i have done in sendImageFromDir.js

app.use(function (req,res) {
    res.status(404);
    res.send("file not found");
});
app.listen(3000,function () {

    console.log("running");


});
