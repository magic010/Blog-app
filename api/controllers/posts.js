const User = require('../models/User.js');
const mongoose = require('mongoose');
const Post = require('../models/Post.js')

// Create post

const createPost = async(req,res)=>{
    const newPosts = new Post(req.body);
    try{
        const savePost = await newPosts.save();
        res.status(200).json(savePost)
    }
    catch(err){
        res.status(500).json(err)
    }
}

//updated post

const updetedPost = async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        
        if(post.username===req.body.username){
            try{
                const updatepost = await Post.findByIdAndUpdate(req.params.id,{
                    $set:req.body
                },
                    {new:true}
                )
                res.status(200).json(updatepost);
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json('You can update only your post')
        }
    }
    catch(err){
        res.status(500).json(err);
    }
}

//delete post

const deletePost = async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        if(post.username===req.body.username){
            try{
                await post.delete();
                res.status(200).json('Post has been deleted');
            }
            catch(err){
                res.status(500).json(err);
            }
        }
        else{
            res.status(401).json('You can delete only your post');
        }

    }
    catch(err){
        res.status(500).json(err);
    }
}

//get post
const getPost = async(req,res)=>{
    try{
        const post = await Post.findById(req.params.id);
        res.status(200).json(post);
    }
    catch(err){
        res.status(500).json(err);
    }
}

//get all post

const getAllPost = async(req,res)=>{
    const username= req.query.user;
    const catName= req.query.cat;
    try{
       let posts;
       if(username){
           posts= await Post.find({username})
       } 
       else if(catName){
           posts = await Post.find({
               categories: {
                   $in:[catName],
               }
           })
       }
       else{
           posts=  await Post.find();
       }
       res.status(200).json(posts);
    }
    catch(err){
        res.status(500).json(err);
    }
}

module.exports={
    createPost,
    updetedPost,
    deletePost,
    getPost,
    getAllPost
}