import { Router } from "express"
import { matchController } from "../controller/match.controller.js"

const MatchRouter = Router()

MatchRouter.get("/", matchController.GetAll)
MatchRouter.get("/:id", matchController.GetOne)
MatchRouter.post("/", matchController.create)
MatchRouter.put("/:id", matchController.update)
MatchRouter.delete("/:id", matchController.delete)

export default MatchRouter