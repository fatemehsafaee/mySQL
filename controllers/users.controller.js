const User = require('../models/User')
const Post = require('../models/Post')
const { where } = require('sequelize')




const getAllUsers = async(req, res) =>{
    try{
        const users = await User.findAll({attributes: ["id", "name", "email"]})
        res.status(201).send(users)
    }catch(err){
        res.status(404).json({msg: "users not found"})
    }
}



const createUser = async(req, res)=>{
    try{
        const {
            body:{ name, email }
        } = req;


        const newUser = await User.create({name, email})
        res.status(201).send(newUser)
    }catch(err){
        console.log("error in create a user", err);
        res.sendStatus(500)
    }
}

const updateUserbyid = async(req, res) =>{
    try{
        const {
            body,
            params: {id}
        } = req;
        const isExistUser = User.findByPk(id)
        if(! isExistUser) return res.sendStatus(404)

        const updatedUser = User.update(body, {where:{id: id}})
        res.status(201).send(updatedUser)
    }catch(err){
        console.log(err);
        res.sendStatus(404)
    }
}

const deleteUserbyid = async(req, res)=>{
    try{
        const {
            params: {id}
        } = req;

        const isExistUser = await User.findByPk(id)
        if(!isExistUser) return res.sendStatus(404)

        const deletedUser = await isExistUser.destroy()
        res.status(201).send(deletedUser).end()


    }catch(err){
        console.log(err);
        res.status(500).json({ message: "Internal server error" });

    }
}


module.exports = {
    getAllUsers,
    createUser,
    updateUserbyid,
    deleteUserbyid
}