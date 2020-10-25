exports.seed = function(knex) {
    return knex("plants")
        .truncate()
        .then(function() {
            return knex("plants").insert([
                {
                    plantname: "Salvia",
                    plantspecies: "Salvia officinalis",
                    waterschedule: "Water in 1 day"
                },
                {
                    plantname: "Winterberry",
                    plantspecies: "Ilex verticillata",
                    waterschedule: "Water in 2 days"
                },
                {
                    plantname: "Viburnum",
                    plantspecies: "Viburnum suspensum",
                    waterschedule: "Water in 3 days"
                },
                {
                    plantname: "Wisteria",
                    plantspecies: "Wisteria sinensis",
                    waterschedule: "Water in 4 days"
                },
                {
                    plantname: "Chinese Lanterns",
                    plantspecies: "Physalis alkekengi",
                    waterschedule: "Water in 5 days"
                },
            ])
        })
  };