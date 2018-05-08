var orm=require("../config/orm.js");

var pho = {
    selectAll: function(cb){
        orm.selectAll("phoTypes", function(res){
            cb(res);
        });
    }
}




module.exports = pho; 

