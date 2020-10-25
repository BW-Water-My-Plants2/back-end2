const express = require("express");
const helmet = require("helmet");
const db = require("./plants-model.js");

const router = express.Router();

// retrieve list of plants
router.get("/", (req, res) => {
    db.find()
        .then(plants => {
            res.status(200).json(plants);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ message: "Error retrieving plants." });
        })
});

// retrieve specific plant (by id)
router.get("/:id", (req, res) => {
    const { id } = req.params;

    db.findById(id)
        .then(plant => {
            res.status(200).json({ data: plant })
        })
        .catch(error => {
            res.status(404).json({ message: "The plant with the specified ID could not be found." })
    })
});

// add new plant
router.post("/", (req, res) => {
    const newPlant = req.body;

    db.add(newPlant)
        .then(plant => {
            res.status(201).json(plant);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not create new plant." })
        })
});

// update existing plant
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const changes = req.body;

    db.findById(id)
        .then(plant => {
            if(plant) {
                db.update(changes, id)
                    .then(update => {
                        res.status(200).json(update)
                    })
            } else {
                res.status(404).json({ errorMessage: "Could not find plant." })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message : "Error updating plant." })
        })
});

// delete existing plant
router.delete("/:id", (req, res) => {
    const { id } = req.params;

    db.findById(id)
        .del()
        .then(count => {
            if(count > 0) {
                res.status(200).json({ data: count })
            } else {
                res.status(404).json({ errorMessage: "Could not find plant." })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: "Could not delete plant." })
        })
});

module.exports = router;