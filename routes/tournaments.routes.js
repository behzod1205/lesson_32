import { Router } from "express";
import { tournamentController } from "../controller/tournaments.controller.js";

const TournamentRouter = Router()

TournamentRouter.get("/", tournamentController.GetAll)
TournamentRouter.get("/:id", tournamentController.GetOne)
TournamentRouter.post("/", tournamentController.create)
TournamentRouter.put("/:id", tournamentController.update)
TournamentRouter.delete("/:id", tournamentController.delete)

export default TournamentRouter