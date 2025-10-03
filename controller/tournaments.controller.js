import BaseController from "./base.controller.js"
const table = "tournaments"
const tableId = "tournament_id"

export const tournamentController = new BaseController(table, tableId)