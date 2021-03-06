const dotenv = require('dotenv').config();
module.exports = {
    dialect : process.env.DIALECT,
    host: process.env.HOST,
    username: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DB,
    port: process.env.DB_PORT,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true
    }
}