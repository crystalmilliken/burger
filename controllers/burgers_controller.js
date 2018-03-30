var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get('/', function (req, res) {
    burger.selectALL(function (data) {
        const returnedObjects = {
            burgers: { devoured: [], notDevoured: [] }
        }
        for (let i = 0; i < data.length; i++) {
            if (data[i].devoured == false) {
                returnedObjects.burgers.notDevoured.push(data[i])
            } else {
                returnedObjects.burgers.devoured.push(data[i])
            }
        }

        res.render("index", returnedObjects);
    })

})
router.post('/submit', function (req, res) {
    const name = req.body.name;
    burger.insertOne(name, function () {
        res.end()
    })
})
router.put("/devour/:id", function (req, res) {
    const id = req.params.id;
    burger.updateOne(id, function () {
        res.end();
    })
})
module.exports = router;