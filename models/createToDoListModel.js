import mongoose from "mongoose";
mongoose.pluralize(null);
const createToDoListModel = new mongoose.Schema({
    userId:{
        type:String  
    },
    dataArray:{
        type:[]
    }
})


export default mongoose.model("todo_List",createToDoListModel ,"todo_List");