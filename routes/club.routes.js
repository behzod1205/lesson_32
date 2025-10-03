import { Router } from "express";
import { clubController } from "../controller/clubs.controller.js";

const ClubRouter = Router()

ClubRouter.get("/", clubController.GetAll)
ClubRouter.get("/:id", clubController.GetOne)
ClubRouter.post("/", clubController.create)
ClubRouter.put("/:id", clubController.update)
ClubRouter.delete("/:id", clubController.delete)

export default ClubRouter