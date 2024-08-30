const express = require('express');
const router = express.Router();
const {getProduct, updateProduct, deleteProduct, postProduct} = require('../controller/product.controller')

router.get("/", getProduct);
router.post("/", postProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router;