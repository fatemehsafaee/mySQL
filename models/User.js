const sequelize = require('../db/connection')
const { DataTypes, UUIDV4 } = require('sequelize')




const User = sequelize.define(
    "user",
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: UUIDV4,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            validate:{
                isEmail: true
            }
        }
    }
)
module.exports = User;