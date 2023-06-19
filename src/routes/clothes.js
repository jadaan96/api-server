'use strict'
const express =require('express')
const {theClothes}=require('../models/index')
const router =express.Router()

router.get('/clothes',getclothes)
router.get('/clothes/:id',getclothesById)
router.post('/clothes',addclothes)
router.put('/clothes/:id',updatclothesById)
router.delete('/clothes/:id',deleteclothes)




async function getclothes (req,res){
const allclothes = await theClothes.findAll()
res.status(200).json(allclothes)
}


async function getclothesById(req,res){
    const id= req.params.id
    const idclothes = await theClothes.findOne({where:{id} })
    res.status(200).json(idclothes)

}

async function addclothes(req,res){
    const obj = req.body;
    const clothes = await theClothes.create(obj);
    res.status(201).json(clothes)
}
async function updatclothesById(req,res){
    const id= req.params.id
    console.log(req)
    const obj = req.body;
    const clothes = await theClothes.update(obj,{where:{id} })
    res.status(202).json(clothes)

}

async function deleteclothes(req,res){
    const id= req.params.id
    const deleteTheclothes = await theClothes.destroy({where:{id} })
    res.status(204).json(deleteTheclothes)

}






module.exports= router