const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'root',
        password: '2022vinicius',
        database: 'mydbs'
    }
});

module.exports = knex;