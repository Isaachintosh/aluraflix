const moment = require('moment')
const connection = require('../infrastructure/connection')

class RegisterVideo {
    adiciona(video, res) {
        const creation_date = moment().format('YYYY-MM-DD HH:MM')

        const date = moment().format('YYYY-MM-DD HH:MM')
        
        const registerVideoWithDateTime = { ...video, creation_date: date }

        const sql = 'INSERT INTO videos_catalog SET ?'

        connection.query(sql, registerVideoWithDateTime, (erro, resultados) => {
            if(erro) {
                console.log(erro)
                res.status(500).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    listar(res) {
        const sql = 'SELECT * FROM videos_catalog'

        connection.query(sql, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    searchForId(id, res) {
        const sql = `SELECT * FROM videos_catalog WHERE id=${id}`

        connection.query(sql, (erro, resultados) => {
            const foundVideo = resultados[0]
            if(erro) {
                res.status(500).json(erro)
            } else {
                res.status(200).json(foundVideo)
            }
        })
    }
}

module.exports = new RegisterVideo()