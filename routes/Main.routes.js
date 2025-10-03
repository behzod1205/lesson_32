import { Router } from "express";
import TournamentRouter from "./tournaments.routes.js";
import GroupRouter from "./group.routes.js";
import ClubRouter from "./club.routes.js";
import TeamRouter from "./teams.routes.js";
import MatchRouter from "./matches.routes.js";
import PlayerRouter from "./player.routes.js";

const MainRouter = Router()

MainRouter.use("/tournaments", TournamentRouter)
MainRouter.use("/groups", GroupRouter)
MainRouter.use("/clubs", ClubRouter)
MainRouter.use("/teams", TeamRouter)
MainRouter.use("/matches", MatchRouter)
MainRouter.use("/players", PlayerRouter)

export default MainRouter