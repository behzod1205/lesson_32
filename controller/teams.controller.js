import BaseController from "./base.controller.js"
const table = "teams"
const TableId = "team_id"

export const teamController = new BaseController(table, TableId)