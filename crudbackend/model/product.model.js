const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required: [true, 'Name is required'],
        },
        quantity:{
            type:String,
            required:true,
            default:0
        },
        price:{
            type:String,
            required:true,
            default:0
        },
        image:{
            type:String,
        }
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model('Product', productSchema);

module.exports = Product;