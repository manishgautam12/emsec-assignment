import createUserModel from "../models/createUserModel.js";
const createUser=(req,res)=>{
    const newUserData = new createUserModel({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        userId:"12345"
      });
      newUserData.save()
      .then(result=>{
        
        res.status(200).json({
            message:"user created successfull",
            userId:req.body.userId,
            status:true,
            code:200
        })
      })
      .catch(err=>{
        res.status(401).json({
            message:"user creation failed",
            status:false,
            code:401
        })
      })
   
}
export default createUser;