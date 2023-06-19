'use strict';


const Clothes = (sequelize,DataTypes) => sequelize.define('Theclothes',{
    clothesName:{
        type:DataTypes.STRING,
        // allowNull: false
    },
    
    Price:{
        type:DataTypes.INTEGER
    }
})
module.exports= Clothes;