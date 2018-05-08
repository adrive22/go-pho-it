var orm=require("../configs/orm.js");

var pho = {
    selectAll: function(cb){
        orm.selectAll("phoTypes", function(res){
            cb(res);
        });
    };
}




module.exports = pho; 

