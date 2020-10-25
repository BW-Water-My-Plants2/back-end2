const db = require("../../data/dbConfig.js");

function find(){
    return db("plants")
};

function findBy(id) {
    return db("plants")
        .where(filter)
        .orderBy("id");
}

function findById(id) {
    return db("plants")
        .where({ id })
        .first();
}

function add(value){
    return db("plants")
        .insert(value, "id")
        .then(id => {
            return findById(id)
        });
}

function update(value, id){
    return db("plants")
        .where({ id })
        .update(value)
        .then(id => {
            return findById(id)
        })

}

function remove(id){
    return db("plants")
    .where({ id })
        .del()
}

module.exports = {
    find,
    findBy,
    findById,
    add,
    update,
    remove
  };