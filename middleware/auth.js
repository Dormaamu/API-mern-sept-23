const jwt = require('jsonwebtoken')
const UserModel = require("../models/User")


const checkuserauth = async(req, res, next) => {
    const { token } = req.cookies
    if(!token) {
        res
        .status(401)
        .json({ status: "failed", message: "unauthorized user please not open" });
    }else{
        const verifytoken = jwt.verify(token, 'Baba@success1511130311090810')
        const data = await UserModel.findOne({ _id: verifytoken.ID })
        req.data1 = data
        next()
    }
}

module.exports = checkuserauth