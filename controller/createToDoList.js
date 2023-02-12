import createToDoListModel from "../models/createToDoListModel.js";

const createToDoList = async (req, res) => {
    let dataobj={
        dataArray:req.body.dataArray
    }
    const listData = new createToDoListModel({
        userId:req.body.userId,
        dataArray:dataobj
      });
      listData.save()
      .then(result=>{
        return res.status(200).json({
            message:"list data add",
            status:true,
            code:200
        })
      })
      .catch(err=>{
        res.status(401).json({
            message:"list data add failed",
            status:false,
            code:401
        })
      })
}
export default createToDoList;


