const orm = require("../config/orm");
const express = require("express");
const router = express.Router();


router.get("/", (req, res) => {
    var burgerObj;
    orm.selectAll(data => {
        burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    })
});

module.exports = router;