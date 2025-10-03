import { Pool } from "pg"

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "mydb",
    password: "bek_1205",
    port: 5432,     
})

export { pool }
// export const tournamentsFuncs = {
//     create: async (tournament)=>{
//         try{
//             const { tournament_name, start_date, end_date, status} = tournament
//             const values = [tournament_name, start_date, end_date, status]
//             const query = `
//             INSERT INTO tournaments(tournament_name, start_date, end_date, status) 
//             VALUES($1, $2, $3, $4)
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             return res.rows[0]
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     },
//     update: async (data)=>{
//         try{
//             const keys = Object.keys(data)
//             if (keys.length === 0) return null
            
//             let values = Object.values(data)
//             values.push(id)

//             const temp = keys
//             .map((key, index)=> `${key} = $${index + 1}`)
//             .join(", ")

//             const query = `
//             UPDATE tournaments
//             SET  ${temp} 
//             WHERE id = $${values.length} 
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             console.log("Tournament updated", res.rows[0])
//             return res.rows[0] || null
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     }
// }
// export const tournamentGroupsFuncs = {
//     create: async (group)=>{
//         try{
//             const { group_name, tournament_id, created_at } = group
//             const values = [group_name, tournament_id, created_at]
//             const query = `
//             INSERT INTO tournament_groups(group_name, tournament_id) 
//             VALUES($1, $2)
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             return res.rows[0]
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     },
//     update: async (data)=>{
//         try{
//             const keys = Object.keys(data)
//             if (keys.length === 0) return null
            
//             let values = Object.values(data)
//             values.push(id)

//             const temp = keys
//             .map((key, index)=> `${key} = $${index + 1}`)
//             .join(", ")

//             const query = `
//             UPDATE tournament_groups
//             SET  ${temp} 
//             WHERE id = $${values.length} 
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             console.log("Groups updated", res.rows[0])
//             return res.rows[0] || null
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     }
// }
// export const footballClubsFuncs = {
//     create: async (clubs)=>{
//         try{
//             const { club_name, city, country, founded_year} = clubs
//             const values = [club_name, city, country, founded_year]
//             const query = `
//             INSERT INTO football_clubs(club_name, city, country, founded_year) 
//             VALUES($1, $2, $3, $4)
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             return res.rows[0]
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     }
// }
// export const teamsFuncs = {
//     create: async (team)=>{
//         try{
//             const { team_name, coach_name } = team
//             const values = [team_name, coach_name ]
//             const query = `
//             INSERT INTO teams(team_name, coach_name) 
//             VALUES($1, $2)
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             return res.rows[0]
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     }
// }
// export const matchFixturesFuncs = {
//     create: async (match)=>{
//         try{
//             const { match_date, venue, home_team_id, away_team_id, home_score, away_score, tournament_id, status} = match
//             const values = [match_date, venue, home_team_id, away_team_id, home_score, away_score, tournament_id, status]
//             const query = `
//             INSERT INTO match_fixtures(match_date, venue, home_team_id, away_team_id, home_score, away_score, tournament_id, status) 
//             VALUES($1, $2, $3, $4, $5, $6, $7, $8)
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             return res.rows[0]
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     }
// }
// export const playersFuncs = {
//     create: async (player)=>{
//         try{
//             const { full_name, date_of_birth, position, team_id, jersey_number} = player
//             const values = [full_name, date_of_birth, position, team_id, jersey_number]
//             const query = `
//             INSERT INTO players(full_name, date_of_birth, position, team_id, jersey_number) 
//             VALUES($1, $2, $3, $4)
//             RETURNING *;`

//             const res = await pool.query(query, values)
//             return res.rows[0]
//         }catch(err){
//             console.error("Error: ", err)
//             throw err
//         }
//     }
// }