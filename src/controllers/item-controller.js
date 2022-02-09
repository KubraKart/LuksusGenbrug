const express = require("express");
const router = express.Router();
const itemModel = require("./../model/item");
const database = require("./../helpers/itemdb");

router.post("/create", (req, res) => {
    const item = new itemModel(req.body.title, req.body.price, req.body.brand, req.body.image);
    database.saveUser(item);
    res.status(200).send(true);
});
