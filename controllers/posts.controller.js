const User = require('../models/User')
const Post = require('../models/Post')
const { where } = require('sequelize')




const getAllPosts = async(req, res) =>{
    try{
        const {
            params: {id}
        } = req;

        const isExistUser = await User.findByPk(id)
        if(!isExistUser) return res.sendStatus(404)

        
        const posts = await Post.findAll({
            userId: id,
            attributes: ["title", "content"],
            include: {
                model: User,
                attributes: ["name", "email"],
              },
        })
        res.status(201).send(posts)
    }catch(err){
        res.status(404).json({msg: "users not found"})
    }
}



const createPost = async(req, res)=>{
    try{
        const {
            body,
            params: {id}
        } = req;


        
        const isExistUser = await User.findByPk(id)
        if(!isExistUser) return res.sendStatus(404)

        const newPost = await Post.create({...body, userId: id})
        res.status(201).send(newPost)
    }catch(err){
        console.log("error in create a post", err);
        res.sendStatus(500)
    }
}

const updatePostbyid = async(req, res) =>{
    try{
        const {
            body,
            params: {id}
        } = req;
        const isExistPost = Post.findByPk(id)
        if(! isExistPost) return res.sendStatus(404)

        const updatedPost = Post.update(body, {where:{id: id}})
        res.status(201).send(updatedPost)
    }catch(err){
        console.log(err);
        res.sendStatus(404)
    }
}

const deletePostbyid = async(req, res)=>{
    try{
        const {
            params: {id}
        } = req;

        const isExistPost = await Post.findByPk(id)
        if(!isExistPost) return res.sendStatus(404)

        const deletedPost = await isExistPost.destroy()
        res.status(201).send(deletedPost).end()


    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal server error" });

    }
}


module.exports = {
    getAllPosts,
    createPost,
    updatePostbyid,
    deletePostbyid
}