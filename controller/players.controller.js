import BaseController from "./base.controller.js"
const table = "players"
const TableId = "player_id"

export const playerController = new BaseController(table, TableId)