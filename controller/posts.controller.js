const pool = require('../database/index')
const postsController = {

    getAll: async (req, res) => {
        try {
            const [rows, fields] = await pool.query("select * from posts")
            res.json({ data: rows })
        } catch (error) {
            console.log(error)
        }
    },

    getById: async (req, res) => {
        try {
            const { id } = req.params
            const [rows, fields] = await pool.query("select * from posts where id = ?", [id])
            res.json({ data: rows })
        } catch (error) {
            console.log(error)
        }
    },
    create: async (req, res) => {
        try {
            const { title, content } = req.body
            const sql = "insert into posts (title,content) values (?,?)"
            const [rows, fields] = await pool.query(sql, [title, content])
            res.json({ data: rows })

        } catch (error) {
            console.log(error)
        }
    },
    update: async (req, res) => {
        try {
            const { title, content } = req.body
            const { id } = req.params
            const sql = "update posts set title = ?, content = ? where id = ?"
            const [rows, fields] = await pool.query(sql, [title, content, id])
            res.json({ data: rows })
        } catch (error) {
            console.log(error)
        }
    },
    delete: async (req, res) => {
        try {
            const { id } = req.params
            const sql = "delete from posts where id = ?"
            const [rows, fields] = await pool.query(sql, [id])
            res.json({ data: rows })
        } catch (error) {
            console.log(error)
        }
    }

}

module.exports = postsController;
