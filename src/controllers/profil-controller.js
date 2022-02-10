const express = require("express");
const router = express.Router();
const profilModel = require("./../model/user");
const database = require("./../helpers/db");

router.post("/create", (req, res) => {
    const user = new profilModel(req.body.email, req.body.password);
    database.saveUser(user);
    res.status(200).send(true);
});

router.post("/login", (req, res) => {
    const user = new profilModel(req.body.email, req.body.password);
    const found = database.findUser(user);
    if (found) {
        if(user.password == found.password) {
            res.status(200).send(true);
        } else {
            res.status(401).send(false);
        } 
    } else {
        res.status(404).send(false);
    }
});

router.delete("/delete", (req, res) => {
    const user = new profilModel(req.body.email, req.body.password);
    database.deleteUser(user);
    res.status(200).send(true);
});

router.get("/update", (req, res) => {
    const user = new profilModel(req.body.email, req.body.password);
    database.findUser(user)
    if (found) {
        if(user.password == found.password) {
            res.status(200).send(true);
        } else {
            res.status(401).send(false);
        } 
    } else {
        res.status(404).send(false);
    }
});

module.exports = router;