const Resume = require('../../Models/UserModels/Resume')
const AddResume = async (req,res)=>{
    try {
    let {title,userId} = req.body
    let data = new Resume({
    title:title,
    user:userId
    })
    await data.save()
    return res.status(201).json({data:data,message:"Resume Title added successfully"})
    } catch (error) {
        return res.status(500).json({message:error})
    }
}
module.exports = {
    AddResume
}