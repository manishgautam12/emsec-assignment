import express  from "express";
import createToDoList from "../controller/createToDoList.js";
import createUser from "../controller/createUser.js";
import deleteList from "../controller/deleteList.js";
import readList from "../controller/readList.js";
import readUser from "../controller/readUser.js";
import updateList from "../controller/updateList.js";

const router= express.Router();


router.post("/createUser/",createUser)
router.get("/readUser/",readUser)


///////////// for todo list //////////////
router.post("/createTodoList/",createToDoList)
router.put("/updateList/",updateList)
router.delete("/deleteList/",deleteList)
router.get("/readList/",readList);

export default router;