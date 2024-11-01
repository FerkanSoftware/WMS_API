const express = require("express");
const router = express.Router();

const {
    getAllCustomerMetaData,
} = require("../controllers/customer-controller.js");

router.get("/getAllMetaData", getAllCustomerMetaData); //pull all customer meta data

module.exports = router;
