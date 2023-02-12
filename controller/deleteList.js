import createToDoListModel from "../models/createToDoListModel.js";

const deleteList=async(req,res)=>{
    createToDoListModel.find({userId:req.body.userId})
    .exec()
    .then(result=>{
      if(result.length<1)
      {
        return res.status(404).json({
            message:"user not exist",
            status:false,
            code:404
        })
      }
      if(result.length>0)
      {
        createToDoListModel.findByIdAndDelete(result[0]._id,(err,docs)=>{
            if(err){
                console.log(err);
            }else{
           console.log("delete succeess")
            }
        })
        return res.status(200).json({
            message:"delete success",
            status:true,
            code:200
        })
      }
    })
    .catch(err=>{
        return res.status(404).json({
            message:"user not exist",
            status:false,
            code:404
        })
    })
}
export default deleteList;