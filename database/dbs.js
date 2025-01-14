const knex = require('knex')({
    client: 'mysql2',
    connection: {
        host: 'localhost',
        user: 'username',
        password: 'password',
        database: 'dbsname'
    }
});

module.exports = knex;
