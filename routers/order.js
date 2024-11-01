const express = require("express");
const router = express.Router();

const {
    getAllOrderList,
} = require("../controllers/order-controller.js");

router.get("/getAllOrderList", getAllOrderList); //pull all customer meta data

module.exports = router;