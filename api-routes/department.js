const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

router.get('/departments', (req, res) => {
    const sql = `SELECT * FROM departments`

    db.query(sql, (err, rows) => {
        if (err) {
            res.status(500).json({
                message: 'There was a server error, 500'
            })
        }
        res.json({
            message: 'Departments Table',
            data: rows
        })
    })
})

// delete all the api routes, not needed