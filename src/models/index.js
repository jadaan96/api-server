'use strict'

const { Sequelize, DataTypes } = require("sequelize")

const DATABASE_URL = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URI
let sequelizeOptions = process.env.NODE_ENV === 'production' ? {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
} : {}
let sequelize = new Sequelize(DATABASE_URL, sequelizeOptions)
const food = require('./food')
const clothes = require('./clothes')

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    theClothes: clothes(sequelize, DataTypes)

    
}