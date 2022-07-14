const mongoose = require('mongoose')
const Categories = require('../models/Category.js');

//post category
const category = async(req,res)=>{
    const newCategory= new Categories(req.body);
    try{
        const saveData = await newCategory.save();
        res.status(200).json(saveData);
    }
    catch(err){
        res.status(500).json(err);
    }
}

//get category
const categoryAll = async(req,res)=>{
    
    try{
        const category = await Categories.find();
        res.status(200).json(category);
    }
    catch(err){
        res.status(500).json(err);
    }
}

module.exports={
    category,
    categoryAll

}