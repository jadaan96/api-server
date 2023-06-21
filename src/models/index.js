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
const ingredients =require('./ingredients')
const recipe = require('./recipe ')
const Collection = require("./lib/collection")

const ingredientsModel = ingredients(sequelize, DataTypes);
const recipeModel = recipe(sequelize, DataTypes);

const ingredientsCollection = new Collection (ingredientsModel)
const recipeCollection = new Collection (recipeModel)

recipeModel.hasMany(ingredientsModel, {foreignKey: 'recipeId', sourceKey: 'id'});

ingredientsModel.belongsTo(recipeModel, {foreignKey: 'recipeId', targetKey: 'id'})

module.exports = {
    db: sequelize,
    Food: food(sequelize, DataTypes),
    theClothes: clothes(sequelize, DataTypes),
    ingredientsCollection,
    recipeCollection
}