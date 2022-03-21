"use strict"
require("dotenv").config();
//Apuntando a produccion
let variables = {
host: process.env.HOST,
database:process.env.DATABASE
}
module.exports = variables;