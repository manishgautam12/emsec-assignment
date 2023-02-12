import createToDoListModel from "../models/createToDoListModel.js";

const updateList=async(req,res)=>{

    createToDoListModel.find({userId:req.body.userId})
    .exec()
    .then(result=>{
      if(result.length<1){
        return res.status(404).json({
            message:"data not exist",
            status:false,
            code:404
        })
      }
      if(result.length>0)
      {
        let newobj={
            dataArray:req.body.dataArray
        }
        
        createToDoListModel.findByIdAndUpdate(result[0]._id,{dataArray:newobj},(err,docs)=>{
            if(err)
            {
                console.log(err);
            }else{
                console.log(docs);
            }
        })
        return res.status(200).json({
            message:"update success",
            status:true,
            code:200
        })
      }
    })
    .catch(err=>{
        return res.status(404).json({
            message:"data not exist",
            status:false,
            code:404
        })
    })
}
export default updateList;