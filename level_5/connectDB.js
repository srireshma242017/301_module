
const Sequelize = require("sequelize");

const database = "todo_db";
const username = "postgres";
const password = "changeme";
const sequelize = new Sequelize(database, username, password, {
    host: "127.0.0.1",
    dialect: "postgres",
});

const connect = async () => {
    return sequelize.authenticate();
}

module.exports = {
    connect,
    sequelize
}