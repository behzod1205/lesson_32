import { Create, Update, Delete, getOne, getAll} from "../helpers/tournament.service.js"
const table = "tournaments"
const tournament_id = "tournament_id"

export const tournamentController ={
    create: async (req, res, next)=>{
        try{
            const data = req.body
            const { tournament_name, start_date, end_date, status } = data
            if(!tournament_name || !start_date || !end_date || !status) return res.status(400).json({message: "Tournament Name, Start date, End date and Status are required"})

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

            const result = await Update(id, data, table, tournament_id)
            if (!result) return res.status(404).json({ message: "Tournament Not Found"})

            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    delete: async(req, res, next)=>{
        try{
            const { id } = req.params

            const result = await Delete(id, table, tournament_id)
            if (!result) return res.status(404).json({ message: "Tournament Not Found"})
            
            res.status(200).json({message: "Tournament Deleted Successfully", Tournament: result})
        }catch(err){
            next(err)
        }
    },
    GetOne: async (req, res, next)=>{
        try{
            const { id } = req.params

            const result = await getOne(id, table)
            if (!result) return res.status(404).json({ message: "Tournament Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    GetAll: async(req, res, next)=>{
        try{
            const result = await getAll(table)
            if (!result) return res.status(404).json({ message: "Tournament Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    }
}