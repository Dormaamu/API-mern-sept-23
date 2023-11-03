const ProductModel = require('../models/product')
const bcrypt = require("bcrypt");
const cloudinary = require("cloudinary").v2;
const jwt = require('jsonwebtoken')


cloudinary.config({
    cloud_name: 'dkdeuzdd9',
    api_key: '651289575525313',
    api_secret: 'U1ld987D8BNQz8Q2pN_wCAgVHsI'
});


class ProductController {
   //admin
   //yha se le k sir n bnwayi h
    static CreateProduct = async (req, res) => {
        try {
            const file = req.files.image
            const myimage = await cloudinary.uploader.upload(file.tempFilePath, {
                folder: 'productimage',
            })
            const result = new ProductModel({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                stock: req.body.stock,
                numOfReviews: req.body.numOfReviews,
                image: {
                    public_id: myimage.public_id,
                    url: myimage.secure_url,
                },
            })
            await result.save()
            res.status(201).send({
                status: 'success',
                message: 'Product Created Successfully',
                result,
            })
        } catch (err) {
            console.log(err)
        }
    }

    static getallproductdetail =async(req,res)=>{
        try{

        }catch(error){
            console.log(error)
        }
    }

    static updateproduct =async(req,res)=>{
        try{

        }catch(error){
            console.log(error)
        }
    }

    static deleteproduct =async(req,res)=>{
        try{

        }catch(error){
            console.log(error)
        }
    }
    ///yaha tk sir n bnwayi h

    static productdisplay = async (req, res) => {
        const data = await ProductModel.find();
        res.status(200).json({
            success: true,
            data,
        });
    };

    static productdelete = async (req, res) => {
        try {
            const data = await ProductModel.findByIdAndDelete(req.params.id);
            res.status(200).json({
                success: true,
                message: "Delete Successfully",
            });
        } catch (error) {
            console.log(error);
        }
    };

    // static productupdate = async(req,res) =>{
    //     try {
    //         const { result } = req.
    //         if (req.files) {
    //             const user = await ProductModel.findById(id)
    //             //const image_id = user.image.public_id
    //            // await cloudinary.uploader.destroy(image_id)
    //             const file = req.files.image
    //             const myCloud = await cloudinary.uploader.upload(file.tempFilePath, {
    //                 folder: 'profileimage',
    //                 width: 150,
    //                 crop: 'scale',
    //             })
    //             var data = {
    //                 name: req.body.name,
    //                 description: req.body.description,
    //                 price: req.body.price,
    //                 stock: req.body.stock,
    //                 numOfReviews: req.body.numOfReviews,
    //                 // image: {
    //                 //     public_id: myimage.public_id,
    //                 //     url: myimage.secure_url,
    //                 // },
    //             }
    //         } else {
    //             var data = {
    //                 name: req.body.name,
    //                 price: req.body.price,
    //             }
    //         }
    //         // Update Code
    //         const result = await ProductModel.findByIdAndUpdate(id, data)
    //         console.log(data)

    //         res.status(200).json({
    //             success: true,
    //             message: 'Product details are update sucessfully',
    //             result,
    //         })
    //     } catch (err) {
    //         console.log(err)
    //     }
    // }
}


// static getproductdetails = async(req,res)=>{

// } 
// static updateproduct = async(req,res)=>{

// } 
// static deleteproduct = async(req,res)=>{

// } 
module.exports = ProductController

