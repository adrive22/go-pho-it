var express = require("express");
var router = express.Router();
var pho = require("../models/pho.js");

router.get("/", function(req, res) {
    var phoArray=[];

    pho.selectAll(function(data){
        for( var i=0; i < data.length; i++){
           phoArray.push(data[i]);
        }
        console.log(phoArray);
        res.render("index", {phoArray: phoArray});
    });
});







module.exports = router;