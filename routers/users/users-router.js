const express = require("express");
const router = express.Router();
const db = require("./users-model.js");
const restricted = require("../auth/authenticate-middleware.js");

// retrieve list of users
router.get("/", (req, res) => {
    db.find()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving users." });
        })
});

// retrieve specific user (by id)
router.get("/:id", restricted, (req, res) => {
    const id = req.params;

    db.findById(id)
        .first()
        .then(account => {
            res.status(200).json({ data: user })
        })
        .catch(error => {
            res.status(404).json({ message: "The user could not be found." })
    })
});

// add new user
router.post("/", restricted, (req, res) => {
    const newUser = req.body;

    db.add(newUser)
        .then(user => {
            db("users").where(id)
            .first()
            .then(account => {
                res.status(200).json({ data: user })
            })
            .catch(error => {
                console.log(error)
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not create new user." })
        })
});

// update existing user
router.put("/:id", (req, res) => {
    const id = req.params;
    const changes = req.body;

    db.findById(id)
        .update(changes)
        .then(count => {
            if(count > 0) {
                res.status(200).json({ data: count })
            } else {
                res.status(404).json({ errorMessage: "Could not find user." })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message : "Could not update user" })
        })
});

// delete existing user
router.delete("/:id", (req, res) => {
    const id = req.params;

    db.findById(id)
        .del()
        .then(count => {
            if(count > 0) {
                res.status(200).json({ data: count })
            } else {
                res.status(404).json({ errorMessage: "Could not find user." })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not delete user." })
        })
});

module.exports = router;