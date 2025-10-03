import BaseController from "./base.controller.js";

const table = "football_clubs"
const TableId = "club_id"


export const clubController = new BaseController(table, TableId)