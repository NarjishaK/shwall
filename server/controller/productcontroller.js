var AddList = require("../models/productmodel");
const asyncHandler = require("express-async-handler");

exports.productAdd = asyncHandler(async (req, res) => {
  console.log("hi")
  try {
    const meterial = req.body.meterial;
    const name = req.body.name;
    const price = req.body.price;
    const productid = req.body.productid;
    const description = req.body.description;

    const image = req.file.filename;

    console.log("Received image:", image);
    const newList = await AddList.create({
      meterial: meterial,
      name: name,
      price: price,
      productid: productid,
      description: description,
      image: image,
    });
    if (newList){
      res.send("Success");
    }
    else {
      res.send("Failed");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
});


exports.productList =asyncHandler(async(req,res)=>{
 try{
  const products = await AddList.find()
  res.json(products)
 }catch (error) {
  console.error(error);
  res.status(500).json({ error: "An error occurred" });
}
})

exports.editproductById =asyncHandler(async(req,res)=>{
  const {id} = req.params;
  try{
    const product =await AddList.findById(id);
    if(!product){
      return res.status(404).json({error:"product not found"})
    }
    res.json(product);
  }catch(error){
    console.log(error);
    res.status(500).json({error:"An error occured"})
  }
});

exports.updateproduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { meterial, name, price, productid, description } = req.body;

  try {
    const product = await AddList.findById(id);
    if (!product) {
      return res.status(404).json({ error: "product not found" });
    }

    // Update only the fields that have a value in the request body
    if (meterial) {
      product.meterial = meterial;
    }
    if (name) {
      product.name = name;
    }
    if (price) {
      product.price = price;
    }
    if (productid) {
      product.productid = productid;
    }
    if (description) {
      product.description = description;
    }

    // Handle the image update separately
    if (req.file) {
      const image = req.file.filename;
      product.image = image;
    }

    const updateproduct = await product.save();
    res.json(updateproduct);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
});

exports.deleteproduct = asyncHandler(async(req,res)=>{
  const {id} =req.params;
  try{
    const product = await AddList.findById(id);
    if(!product){
      return res.status(404).json({error:"product not found"})
    }
    await product.deleteOne();
    res.json({message:"deleted successfully"})
  }catch (err) {
    console.log(err);
    res.status(500).json({ error: "An error occurred" });
  }
})