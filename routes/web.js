const express = require('express')
const UserController =require('../controllers/UserController')
const ProductController =require('../controllers/ProductController')
const router = express.Router()
const checkuserauth = require('../middleware/auth')

//UserController
router.get('/getalluser',checkuserauth,UserController.getalluser)
router.get('/getuserdetail',checkuserauth,UserController.getuserdetail)
router.post('/userinsert',UserController.userinsert)
router.post('/verifylogin',UserController.verifylogin)
router.get('/logout',UserController.Logout)
router.post('/updatepassword',checkuserauth,UserController.updatepassword)
router.post('/updateprofile',checkuserauth,UserController.UpdateProfile)

//Admin Controller
router.get('/getsingleuser/:id', checkuserauth,UserController.GetsingleUser)
router.get('/deleteuser/:id', checkuserauth,UserController.DeleteUser)

//Product API
router.post('/createproduct',ProductController.CreateProduct)
router.get('/productdisplay',ProductController.productdisplay)
router.get('/productdelete',ProductController.productdelete)
// router.post('/productupdate/:id',ProductController.productupdate)

module.exports = router