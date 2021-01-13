const express = require('express')
const Post = require('../models/Post')
const router = express.Router()

router.get('/:id',async (req,res)=>{
    console.log(req.params.id)
    try{
        const data = await Post.findById(req.params.id)
        res.json(data)
    }catch(err){
        res.send({message:err})
    }
})
router.get('/',async (req,res)=>{
    try{
        const data = await Post.find()
        res.json(data)
    }catch(err){
        res.send({message:err})
    }
})
router.post('/',async (req,res)=>{
    // console.log(req.body.description)
    const post = new Post({
        title:req.body.title,
        description:req.body.description
    })
    try{
        savedPost = await post.save()
        res.json(savedPost)
    }catch(err){
        res.send({message:err})
    }
    
    // .then( data =>{
    //     res.json(data)
    // })
    // .catch( err =>{
    //     res.json({message:err})
    // })
})

router.put('/:id',async (req,res)=>{
    try{
        const data = await Post.updateOne({_id:req.params.id},{
            $set:{
                title:req.body.title,
                description:req.body.description
            }
        })
        res.json(data)
    }catch(err){
        res.send({message:err})
    }
})
router.delete('/:id', async (req,res)=>{
    try{
        const data = await Post.remove({_id:req.params.id})
        res.json(data)
    }catch(err){
        res.send({message:err})
    }
})
module.exports=router