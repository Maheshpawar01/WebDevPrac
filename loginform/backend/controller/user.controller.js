const User = require('../model/user.model');

//login
const getUser = async(req, res)=>{
    try {
        const {name, email} = req.body;
        const userExists = await User.findOne({email});
        if(!userExists){
           return res.status(400).json({
                msg:"user not exits"
            })

        }
        res.status(200).json({userExists, msg:"find user"})
    } catch (error) {
        res.status(500).json({msg:"fetching user error", error: error})
    }
}

//get all users
const getAllUsers = async(req, res)=>{
    try {
        const users = await User.find();
        res.status(200).json({users, msg:"get all users"})
    } catch (error) {
        res.status(500).json({msg:"fetching user error", error: error})
    }
}

//signup or save user
const saveUsers = async(req, res)=>{
    try {
        const {name, email} = req.body;
        const existingUser = await User.findOne({email})
        if(existingUser){
            res.status(400).json({
                msg:"user already exists"
            })
        }

        const newUser = new User({name, email});
        const saveUser = await newUser.save()
        res.status(200).json({
            saveUser,
            msg:"User saved successfully"
        })

    } catch (error) {
        res.status(500).json({msg:"saving user error", error: error})
    }
}

//delete user by cheking the id
const updateUser = async(req, res)=>{
    try {
        const {id} = req.params;
        const userId = await User.findByIdAndUpdate(id, req.body)
        if(!userId){
            res.status(400).json({
                msg:"user not found"
            })
        }
        const updatedUser = await userId.save();
        res.status(200).json({
            updatedUser,
            msg:"user updated successfully"
        })
    } catch (error) {
        res.status(500).json({msg:"updating user error", error: error})
    }
}

const deleteUser = async(req, res)=>{
    try {
        const {id} = req.params;
        const deletedUser = await User.findByIdAndDelete(id)
        if(!deletedUser){
            res.status(400).json({
                msg:"user not found"
            })
        }
        
        // const deletedUser = await deletedUser.delete()
        res.status(200).json({
            deletedUser,
            msg:"User deleted successfully"
        })
    } catch (error) {
        res.status(500).json({msg:"updating user error", error: error})
    }
}

// const saveUsers = async(req, res) =>{
//     try {
//         const {name, email} = req.body;
//         const newUser = await User.find(email == User.email)
//         if(email){
//             res.send("user already exists")
//         }
//         const saveUser = newUser.Save();
//         res.status(200).json({saveUser, msg:"user saved successfully"})
//     } catch (error) {
//         res.status(500).json({msg:"saving user error", error: error})
//     }
// }

module.exports=({
    getUser,
    getAllUsers,
    saveUsers,
    updateUser,
    deleteUser
})
