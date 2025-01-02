const User = require('../../Models/UserModels/User')
const updateUser =async (req,res)=>{
    let {id} = req.params;
    let { fullname , email ,  PhoneNumber , dateOfBirth ,   gender , age ,qualification,
        language , experience , showProfile , userDescription
     }  = req.body;
     try {
        let updateUser = await User.findByIdAndUpdate(id,{
            fullname , email ,  PhoneNumber , dateOfBirth ,   gender , age ,qualification,
            language , experience , showProfile , userDescription
        },{new:true})
        return res.status(201).json({message:"User profile updated successfully "})
     } catch (error) {
        return res.status(501).json({error:error})
     }
    
}

module.exports = {
    updateUser
}