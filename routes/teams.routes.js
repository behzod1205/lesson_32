import { Router } from "express";
import { teamController } from "../controller/teams.controller.js";

const TeamRouter = Router()

TeamRouter.get("/", teamController.GetAll)
TeamRouter.get("/:id", teamController.GetOne)
TeamRouter.post("/", teamController.create)
TeamRouter.put("/:id", teamController.update)
TeamRouter.delete("/:id", teamController.delete)

export default TeamRouter