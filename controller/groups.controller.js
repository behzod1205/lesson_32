import BaseController from "./base.controller.js"
const table = "tournament_groups"
const TableId = "group_id"

export const groupController = new BaseController(table, TableId)
