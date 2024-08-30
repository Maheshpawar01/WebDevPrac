const mongoose = require('mongoose');


const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            trim:true
        },
        email:{
            type: String,
            required:true,
            trim:true,
            unique:true,
            lowercase:true,
            validate:{
                validator:(v)=>{
                    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)
                },
                msg:(props)=> `${props.value} is not a valid email`
            }

        }
    },
    {
        timestamps: true
    }
)

const User = mongoose.model('User', userSchema);

module.exports = User;