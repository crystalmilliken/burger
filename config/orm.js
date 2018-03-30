var connection = require("./connection.js");

var orm = {
    selectAll: function (table, callback) {
        const queryString = `SELECT * FROM ${table}`;
        connection.query(queryString, function (err, result) {
            if (err)
                throw err;
            callback(result);
        })
    },
    insertOne: function (table, name, callback) {

        const queryString = `INSERT INTO ${table} (burger_name, devoured) VALUES('${name}', false)`;
        connection.query(queryString, function (err, result) {
            callback(result);
        })
    },

    updateOne: function (table, id, column, callback) {

        const queryString = `UPDATE ${table} SET ${column} = true WHERE id = ${id}`
        connection.query(queryString, [{
            devoured: true
        }], function (err, result) {
            if (err)
                throw (err)
            callback(result)
        })
    }
}
module.exports = orm;