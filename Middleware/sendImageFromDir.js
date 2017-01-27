/**
 * Created by saiful on 1/27/17.
 */
var express = require("express"),
    app = express(),
    path = require("path"),
    fs = require("fs");

app.use(function (req,res,next) {
    console.log(req.url);
    next();
})
app.use(function (req, res, next) {
    filePath = path.join(__dirname,"static",req.url);
    console.log(filePath);
    fs.stat(filePath,function (err,fileInfo) {
        if (err){
            next();
            return;
        }
        if (fileInfo.isFile()){
            res.sendFile(filePath);

        }
        else {
            next();
        }
    });
});
app.use(function (req,res) {
    res.status(404);
    res.send("file not found");
});
app.listen(3000,function () {

    console.log("running");
});