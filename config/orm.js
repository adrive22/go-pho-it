var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = 'SELECT * FROM' + table;

        connection.query(querySting, function(err, data){
            if (err)
            console.log(err);

            //callback data to make sure the data gets back in time to be called in server
            cb(data);
        });
    }
};