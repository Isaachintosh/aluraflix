const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'catalogo-aluraflix'
})

module.exports = connection

// const token = 'b88101d9893d27c5409fe96049791c';

// fetch('https://graphql.datocms.com/', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization': `Bearer ${token}`
//     },
//     body: JSON.stringify({
//         "query": `
//             query {
//                 allVideoRepositories {
//                     id
//                     title
//                     _status
//                     _firtsPublishedAt
//                 }
//             }
//         `
//     })
// })
// .then(res => res.json())
// .then((res) => {
//     console.log(res.data)
// })
// .catch((error) => {
//     console.log(error)
// })