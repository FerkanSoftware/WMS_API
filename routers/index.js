const express = require("express");
const customer = require("./customer.js");
const order = require("./order.js");


const router = express.Router();

router.get("/", (req, res) => {
    res.send("Working API");
});

// Router definition
router.use("/api/customer", customer);
router.use("/api/order", order);

module.exports = router;
