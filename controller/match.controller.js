import BaseController from "./base.controller.js"
const table = "match_fixtures"
const TableId = "match_id"

export const matchController = new BaseController(table, TableId)