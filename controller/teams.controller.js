import { Create, Update, Delete, getOne, getAll} from "../helpers/tournament.service.js"
const table = "teams"
const TableId = "team_id"

export const teamController ={
    create: async (req, res, next)=>{
        try{
            const data = req.body
            const { team_name, club_id, group_id, coach_name } = data
            if(!team_name || !club_id || !group_id || !coach_name) return res.status(400).json({message: "Team name, Club id, Group id and Coach name are required"})

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
            if (!result) return res.status(404).json({ message: "Team Not Found"})

            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    delete: async(req, res, next)=>{
        try{
            const { id } = req.params

            const result = await Delete(id, table, TableId)
            if (!result) return res.status(404).json({ message: "Team Not Found"})
            
            res.status(200).json({message: "Team Deleted Successfully", Team: result})
        }catch(err){
            next(err)
        }
    },
    GetOne: async (req, res, next)=>{
        try{
            const { id } = req.params

            const result = await getOne(id, table)
            if (!result) return res.status(404).json({ message: "Team Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    GetAll: async(req, res, next)=>{
        try{
            const result = await getAll(table)
            if (!result) return res.status(404).json({ message: "Team Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    }
}