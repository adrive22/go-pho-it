var express = requre("express");
var router = express.Router();
var pho = require("../models/pho.js");

router.get("/", function(req, res) {
    var phoArray=[];

    pho.selectAll(function(data){
        for( var=i=0; i<dat.length; i++){
           phoArray.push(data[i]);
        }
        res.render("index", info);
    });
});







module.exports = 