import {v2 as cloudinary} from "cloudinary"
import productModel from '../models/productModel.js'
//function for add product 
const addProduct = async (req,res)=>{
  console.log(req.files);
  console.log(req.body);
  
  try {
    const {name,description,price,category,subCategory,sizes,bestseller} = req.body;

    const image1=req.files.image1 && req.files.image1[0];
    const image2=req.files.image2 && req.files.image2[0];
    const image3=req.files.image3 && req.files.image3[0];
    const image4=req.files.image4 && req.files.image4[0];
      const images = [image1,image2,image3,image4].filter((item)=>item!==undefined)

      if (images.length === 0) {
        return res.status(400).json({ success: false, message: "No images uploaded" });
      }
   
      let imagesUrl = await Promise.all(
        images.map(async (file) => {
          try {
            let result = await cloudinary.uploader.upload_stream({ resource_type: "image" }, (error, result) => {
              if (error) {
                console.error("Cloudinary upload error:", error);
                return null;
              }
              return result.secure_url;
            }).end(file.buffer); // Upload buffer directly
            return result;
          } catch (error) {
            console.error("Cloudinary error:", error);
            return null;
          }
        })
      );

      imagesUrl = imagesUrl.filter(url => url !== null);
      console.log(imagesUrl);
      if (imagesUrl.length === 0) {
        return res.status(500).json({ success: false, message: "Image upload failed" });
      }
       const productData = {
        name,
        description,
        category,
        price:Number(price),
        subCategory,
        bestseller:bestseller === "true"? true:false,
        sizes:JSON.parse(sizes),
        image:imagesUrl,
        date:Date.now()
       }

       const product = new productModel(productData);
       await product.save();

       res.json({success:true,message:"product added"});

    console.log(name,description,price,category,subCategory,sizes,bestseller);
    console.log(images);
      
  } catch (error) {
    console.log(error);
    
    res.json({success:false,message:error.message});
  }
}
// function for list product
const listProduct =async(req,res)=>{
try {
  const products = await productModel.find({});
  res.json({success:true,products}) 
} catch (error) {
  console.log(error);
  res.json({success:false,message:error.message})
}
}
// function for removing product
const removeProduct =async(req,res)=>{
   try {
    await productModel.findByIdAndDelete(req.body.id);
    res.json({success:true,message:"product removed"})
   } catch (error) {
    console.log(error);
    
   }
}

// function for single product info
const singleProduct =async(req,res)=>{
     try {
      const {productId } = req.body;
      const product = await productModel.findById(productId);
      res.json({success:true,product})
     } catch (error) {
       console.log(error);
       res.json({success:false,message:error.message})
      
     }
}

export {addProduct,listProduct,removeProduct,singleProduct}