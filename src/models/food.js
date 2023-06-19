'use strict';


const food = (sequelize,DataTypes) => sequelize.define('TheFood',{
    foodName:{
        type:DataTypes.STRING,
        allowNull: false
    },
    foodCounty:{
        type:DataTypes.STRING,

    },
    Price:{
        type:DataTypes.INTEGER
    }
})
module.exports= food;