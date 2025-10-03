import { Router } from "express";
import { playerController } from "../controller/players.controller.js";

const PlayerRouter = Router()

PlayerRouter.get("/", playerController.GetAll)
PlayerRouter.get("/:id", playerController.GetOne)
PlayerRouter.post("/", playerController.create)
PlayerRouter.put("/:id", playerController.update)
PlayerRouter.delete("/:id", playerController.delete)

export default PlayerRouter