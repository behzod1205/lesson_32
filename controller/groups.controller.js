import { Create, Update, Delete, getOne, getAll} from "../helpers/tournament.service.js"
const table = "tournament_groups"
const TableId = "group_id"

export const groupController ={
    create: async (req, res, next)=>{
        try{
            const data = req.body
            const { group_name, tournament_id } = data
            if(!group_name || !tournament_id) return res.status(400).json({message: "Tournament Id and Group name are required"})

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
            if (!result) return res.status(404).json({ message: "Group Not Found"})

            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    delete: async(req, res, next)=>{
        try{
            const { id } = req.params

            const result = await Delete(id, table, TableId)
            if (!result) return res.status(404).json({ message: "Group Not Found"})
            
            res.status(200).json({message: "Group Deleted Successfully", Group: result})
        }catch(err){
            next(err)
        }
    },
    GetOne: async (req, res, next)=>{
        try{
            const { id } = req.params

            const result = await getOne(id, table)
            if (!result) return res.status(404).json({ message: "Group Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    GetAll: async(req, res, next)=>{
        try{
            const result = await getAll(table)
            if (!result) return res.status(404).json({ message: "Group Not Found"})
            
            res.status(200).json(result)
        }catch(err){
            next(err)
        }
    },
    GetByTId: async (req, res, next)=>{
        
    }
}