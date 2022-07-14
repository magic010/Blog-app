const User = require('../models/User.js');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Post = require('../models/Post.js')

//Updated
const updateUser = async(req,res)=>{
    if(req.body.userId===req.params.id){
        if(req.body.password){
            const {password}= req.body;
            const hashedPassword = await bcrypt.hash(password,10);
            req.body.password= hashedPassword;
        }
        try{
            const update_user =  await User.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },
            {new:true}
            )
            res.status(200).json(update_user);
        }
        catch(err){
            res.status(500).json(err);
        }
    }
    else{
        res.status(401).json('Only Real user Can Updated');
    }
}


//delete

const deleteUser = async( req ,res )=> {
    if(req.body.userId === req.params.id){
        try{
            const user = await User.findById(req.params.id);
            if(user){
                try{
                    await Post.deleteMany({username:user.username});
                    await User.findByIdAndDelete(req.params.id);
                    res.status(200).json('user has been deleted');
                }
                catch(err){
                    res.status(500).json(err);
                }
            }

        }
        catch(err){
            res.status(404).json('user not found!')
        }

    }
    else{
        res.json(400).json('user incorrect@!')
    }
}
//Get User

const getUser = async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        const {password, ...others} = user._doc;
        res.status(201).json(others);

    }
    catch(err){
        res.status(500).json(err);
    }
}

module.exports={
    updateUser,
    deleteUser,
    getUser

}