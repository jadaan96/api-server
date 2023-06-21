'use strict'
const express =require('express')
const {ingredientsCollection}=require('../models/index')
const router =express.Router()

router.get('/ingredients',getingredients)
router.get('/ingredients/:id',getingredientsById)
router.post('/ingredients',addingredients)
router.put('/ingredients/:id',updatingredientsById)
router.delete('/ingredients/:id',deleteingredients)




async function getingredients (req,res){
const allingredients = await ingredientsCollection.read()
res.status(200).json(allingredients)
}


async function getingredientsById(req,res){
    const id= req.params.id
    console.log(id)
    const idingredients = await ingredientsCollection.read(id)
    res.status(200).json(idingredients)

}

async function addingredients(req,res){
    const obj = req.body;
    const ingredients = await ingredientsCollection.create(obj);
    res.status(201).json(ingredients)
}
async function updatingredientsById(req,res){
    const id= req.params.id
    // console.log(req)
    const obj = req.body;
    const updatedCustomer = await ingredientsCollection.update(id, obj)
    const idingredients = await ingredientsCollection.read(id)
        res.status(202).json(idingredients)

}

async function deleteingredients(req,res){
    const id= req.params.id
    const deleteTheingredients = await ingredientsCollection.delete(id)
    res.status(204).json(deleteTheingredients)

}






module.exports= router