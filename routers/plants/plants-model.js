const db = require("../../data/dbConfig.js");

function find(){
    return db("plants");
};

function findBy(filter) {
    return db("plants")
        .where(filter);
}

function findById(id) {
    return db("plants")
        .where({ id })
        .first();
}7

async function add(plant){
    const [id] = await db("plants").insert(plant);
    return findById(id);
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