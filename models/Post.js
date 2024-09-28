const sequelize = require('../db/connection')
const { DataTypes, UUIDV4 } = require('sequelize')

const User = require('./User')



const Post = sequelize.define(
    "post",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        content: {
            type: DataTypes.STRING(100),
            allowNull: true
        }
    }
)

Post.belongsTo(User);
User.hasMany(Post)



module.exports = Post;