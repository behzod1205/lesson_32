import { Create, Update, Delete, getOne, getAll} from "../helpers/tournament.service.js"
const table = "match_fixtures"
const TableId = "match_id"

export const matchController ={
    create: async (req, res, next)=>{
        try{
            const data = req.body
            const { match_date, venue, home_team_id, away_team_id, home_score, away_score, tournament_id, status } = data
            if(!match_date || !venue || !home_team_id || !away_team_id ||!tournament_id) return res.status(400).json({message: "Match date, Venue, HomeTeam id, AwayTeam id, home score, away score, tournament id and status are required"})

            const result = await Create(data, table)
            res.status(201).json(result)
        }catch(err){
            next(err)
        }
    },
    update: async (req, res, next)=>{
        try{
            const { id } = req.params
            const data = req.body

            const result = await Update(id, data, table, TableId)
            if (!result) return res.status(404).json({ message: "Match Not Found"})

            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    delete: async(req, res, next)=>{
        try{
            const { id } = req.params

            const result = await Delete(id, table, TableId)
            if (!result) return res.status(404).json({ message: "Match Not Found"})
            
            res.status(200).json({message: "Match Deleted Successfully", Match: result})
        }catch(err){
            next(err)
        }
    },
    GetOne: async (req, res, next)=>{
        try{
            const { id } = req.params

            const result = await getOne(id, table)
            if (!result) return res.status(404).json({ message: "Match Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    GetAll: async(req, res, next)=>{
        try{
            const result = await getAll(table)
            if (!result) return res.status(404).json({ message: "Match Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    }
}