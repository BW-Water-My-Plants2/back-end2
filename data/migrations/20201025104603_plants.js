exports.up = function(knex) {
    return knex.schema.createTable("plants", tbl => {
      tbl.increments();
      tbl.string("plantname", 256).notNullable();
      tbl.string("plantspecies", 256).notNullable();
      tbl.string("waterschedule", 256).notNullable();
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("plants");
  };