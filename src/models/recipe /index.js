'use strict';


const Recipe = (sequelize,DataTypes) => sequelize.define('TheRecipe',{
  name:{
        type:DataTypes.STRING,
        // allowNull: false
    },
    
    recipeCounty:{
        type:DataTypes.STRING,

    },
})
module.exports= Recipe;