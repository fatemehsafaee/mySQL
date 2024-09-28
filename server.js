const express = require('express')
require('dotenv').config();

const sequelize = require('./db/connection')

const server = express()


server.use(express.json())
server.use('/users', require('./routes/users.routes'))
server.use('/posts', require('./routes/posts.routes'))




const start = async() =>{
    try{
        await sequelize.authenticate()
        console.log("connectin is established :)");

        await sequelize.sync({alter: true})
        console.log("the table exist and has been modified softly :D");

        server.listen(process.env.APP_PORT, ()=>{
            console.log(`server is running on the port ${process.env.APP_PORT}`);
        })

    }
    catch(err){
        console.log(err);
    }
}

start()


