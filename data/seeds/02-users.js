exports.seed = function(knex) {
    return knex("users")
        .truncate()
        .then(function() {
            return knex("users").insert([
                {
                    name: "Maisie Adkins",
                    username: "maisieadkins",
                    password: "password123",
                    email: "maisieadkins@email.com",
                    phonenumber: 123456789
                },
                {
                    name: "Aleyna Collins",
                    username: "aleynacollins",
                    password: "123password",
                    email: "aleynacollins@email.com",
                    phonenumber: 987654321
                }
            ])
        })
  };