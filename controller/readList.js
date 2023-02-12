import createToDoListModel from "../models/createToDoListModel.js";

const readList=async(req,res)=>{
    createToDoListModel.find({userId:req.body.userId})
    .exec()
    .then(data=>{
  if(data.length<1)
  {
    return res.status(404).json({
        message:"user not found",
        status:false,
        code:404
    })
  }
  if(data.length>0)
  {
    return res.status(200).json({
        Data:data,
        status:true,
        code:200
    })
  }
    }).catch(err=>{
        return res.status(401).json({
            message:"server failed",
            status:false,
            code:401
        })
    })
    
}
export default readList;