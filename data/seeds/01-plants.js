exports.seed = function(knex) {
    return knex("plants")
        .truncate()
        .then(function() {
            return knex("plants").insert([
                {
                    id: 1,
                    plantname: "Salvia",
                    plantspecies: "Salvia officinalis",
                    waterschedule: "Water in 1 day"
                },
                {
                    id: 2,
                    plantname: "Winterberry",
                    plantspecies: "Ilex verticillata",
                    waterschedule: "Water in 2 days"
                },
                {
                    id: 3,
                    plantname: "Viburnum",
                    plantspecies: "Viburnum suspensum",
                    waterschedule: "Water in 3 days"
                },
                {
                    id: 4,
                    plantname: "Wisteria",
                    plantspecies: "Wisteria sinensis",
                    waterschedule: "Water in 4 days"
                },
                {
                    id: 5,
                    plantname: "Chinese Lanterns",
                    plantspecies: "Physalis alkekengi",
                    waterschedule: "Water in 5 days"
                },
            ])
        })
  };