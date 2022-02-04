const Product=require('../model/Product')


exports.addProduct=async (req,res)=>{
   try {
       const {name,description,rating,price,countInStock,category}=req.body

       const newProduct = new Product ({name,description,rating,price,countInStock,category})
       await newProduct.save()
       res.status(200).send({msg:"Product added  succ"})
    } catch (error) {
        res.status(400).send({msg:"fail for added Product   "})

   }

}
exports.getProducts=async(req,res)=>{
    try {
        const listOfProducts = await Product.find() 
        res.status(200).send({msg:'this is list of products',listOfProducts})
    } catch (error) {
        res.status(400).send({msg:" can not get all products  "})

    }
}
exports.getProduct=async(req,res)=>{
    try {
        const {_id}=req.params
        const ProductTofind=await Product.findOne({_id})
        res.status(200).send({msg:'this is the Product',ProductTofind})

    } catch (error) {
        res.status(400).send({msg:" can not get the product "})

    }
}

exports.deleteProduct=async(req,res)=>{
try {
    const {_id}=req.params
     await Product.deleteOne({_id})
    res.status(200).send({msg:' Product deleted succ'})

} catch (error) {
    res.status(400).send({msg:" can not delete the product "})

}
}
exports.updateProduct =async(req,res)=>{
    try {
        const {_id}=req.params
        const newProduct=req.body
        await Product.updateOne({_id},{$set:{... newProduct}})
        res.status(200).send({msg:' Product updated  succ'})

    } catch (error) {
        res.status(400).send({msg:" can not update the product "})

    }
}