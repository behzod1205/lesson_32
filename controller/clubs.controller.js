import { Create, Update, Delete, getOne, getAll} from "../helpers/tournament.service.js"
const table = "football_clubs"
const TableId = "club_id"

export const clubController ={
    create: async (req, res, next)=>{
        try{
            const data = req.body
            const { club_name, city, country, founded_year } = data
            if(!club_name || !city || !country || !founded_year) return res.status(400).json({message: "Club name, City, Country and Founed Year are required"})

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
            if (!result) return res.status(404).json({ message: "Club Not Found"})

            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    delete: async(req, res, next)=>{
        try{
            const { id } = req.params

            const result = await Delete(id, table, TableId)
            if (!result) return res.status(404).json({ message: "Club Not Found"})
            
            res.status(200).json({message: "Club Deleted Successfully", Club: result})
        }catch(err){
            next(err)
        }
    },
    GetOne: async (req, res, next)=>{
        try{
            const { id } = req.params

            const result = await getOne(id, table)
            if (!result) return res.status(404).json({ message: "Club Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    GetAll: async(req, res, next)=>{
        try{
            const result = await getAll(table)
            if (!result) return res.status(404).json({ message: "Club Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    }
}