const Product = require('../model/product.model')


const getProduct = async(req, res)=>{
    try {
        const allProduct = await Product.find();
        res.status(200).json(allProduct);
        
    } catch (error) {
        res.status(500).json({message:"internal server error"})
    }
}

const postProduct = async(req, res)=>{
    try {
        const {name, price} = req.body;
        const newProduct = new Product({name, price})
        const saveProduct = await newProduct.save()
        res.status(200).json(saveProduct)
    } catch (error) {
        res.status(400).json({msg:"internal server error"})
    }
}

const updateProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const productId = await Product.findByIdAndUpdate(id, req.body)
        if(!productId){
            return res.status(200).json({msg: " product not found"})
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json({updatedProduct, msg:"updated successfully"})
        
    } catch (error) {
        res.status(500).json({
            msg:"Internal server error"
        })
    }
};

const deleteProduct = async(req, res)=>{
    try {
        const {id} = req.params;
        const productId = await Product.findByIdAndDelete(id, req.body)
        if(!productId){
            return res.status(200).json({msg:"product not found"});
        }

        // const deleteProduct = await Product.findById(id)
        res.status(200).json({productId, msg:"delete Product"})
    } catch (error) {
        res.status(500).json({
            msg :"Internal server error"
        })
    }
}


module.exports={
    getProduct,
    postProduct,
    updateProduct,
    deleteProduct
}