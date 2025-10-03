import { Router } from "express";
import { groupController } from "../controller/groups.controller.js";

const GroupRouter = Router()

GroupRouter.get("/", groupController.GetAll)
GroupRouter.get("/:id", groupController.GetOne)
GroupRouter.post("/", groupController.create)
GroupRouter.put("/:id", groupController.update)
GroupRouter.delete("/:id", groupController.delete)

export default GroupRouter