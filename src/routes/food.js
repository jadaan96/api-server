'use strict'
const express =require('express')
const {Food}=require('../models/index')
const router =express.Router()

router.get('/food',getFood)
router.get('/food/:id',getFoodById)
router.post('/food',addFood)
router.put('/food/:id',updatFoodById)
router.delete('/food/:id',deleteFood)




async function getFood (req,res){
const allFood = await Food.findAll()
res.status(200).json(allFood)
}


async function getFoodById(req,res){
    const id= req.params.id
    const idFood = await Food.findOne({where:{id} })
    res.status(200).json(idFood)

}

async function addFood(req,res){
    const obj = req.body;
    const food = await Food.create(obj);
    res.status(201).json(food)
}
async function updatFoodById(req,res){
    const id= req.params.id
    console.log(req)
    const obj = req.body;
    const food = await Food.update(obj,{where:{id} })
    const updatefood = await findOne.update(obj)

    res.status(202).json(updatefood)

}

async function deleteFood(req,res){
    const id= req.params.id
    const deleteTheFood = await Food.destroy({where:{id} })
    res.status(204).json(deleteTheFood)

}






module.exports= router