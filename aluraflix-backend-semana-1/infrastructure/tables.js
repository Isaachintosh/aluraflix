class Tables {
    init(connection) {
        console.log('Tables foram chamadas')
        this.connection = connection
        this.createCatalog()
    }
    createCatalog() {
        // campos: ID - TITULO - DESCRICAO - URL - comments/compliments
        const sql = 'CREATE TABLE IF NOT EXISTS videos_catalog (id int NOT NULL AUTO_INCREMENT, title varchar(64) NOT NULL, description varchar(512) NOT NULL, url varchar(256) NOT NULL, comments text, creation_date datetime NOT NULL DEFAULT CURRENT_TIMESTAMP, PRIMARY KEY(id))'

        this.connection.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('The Videos-Catalog has been created! Well done, mate!')
            }
        })
    }
}

module.exports = new Tables