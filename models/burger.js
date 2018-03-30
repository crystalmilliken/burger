var orm = require("../config/orm.js");

var burger = {
    selectALL: function (callback) {
        orm.selectAll("burgers", function (res) {
            callback(res)
        })
    },
    insertOne: function (name, callback) {
        console.log(name)
        orm.insertOne("burgers", name, function (res) {
            callback(res)
        })
    },
    updateOne: function (id, callback) {
        orm.updateOne("burgers", id, "devoured", function (res) {
            callback(res)
        })
    }
}

module.exports = burger;