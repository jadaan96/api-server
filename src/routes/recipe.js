'use strict'
const express =require('express')
const {recipeCollection,ingredientsCollection}=require('../models/index')
const Ingredients = require('../models/ingredients')
const router =express.Router()

router.get('/recipe',getrecipe)
router.get('/recipe/:id',getrecipeById)
router.post('/recipe',addrecipe)
router.put('/recipe/:id',updatrecipeById)
router.delete('/recipe/:id',deleterecipe)
router.get('/recipeall/:id', IngredientsrRecipe);





async function getrecipe (req,res){
const allrecipe = await recipeCollection.read()
res.status(200).json(allrecipe)
}


async function getrecipeById(req,res){
    const id= req.params.id
    console.log(id)
    const idrecipe = await recipeCollection.read(id)
    res.status(200).json(idrecipe)

}

async function addrecipe(req,res){
    const obj = req.body;
    const recipe = await recipeCollection.create(obj);
    res.status(201).json(recipe)
}
async function updatrecipeById(req,res){
    const id= req.params.id
    // console.log(req)
    const obj = req.body;
    const updatedCustomer = await recipeCollection.update(id, obj)
    const idrecipe = await recipeCollection.read(id)
        res.status(202).json(idrecipe)

}

async function deleterecipe(req,res){
    const id= req.params.id
    const deleteTherecipe = await recipeCollection.delete(id)
    res.status(204).json(deleteTherecipe)

}

async function IngredientsrRecipe(req, res) {
    const id = req.params.id;
    const IngredientsrRecipeById = await recipeCollection.readAll(id, ingredientsCollection.model);
    res.status(200).json(IngredientsrRecipeById)
  }




module.exports= router