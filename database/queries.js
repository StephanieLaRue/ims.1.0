const pg = require("pg")
const insertNewData = "INSERT INTO userdata(userinput) values($1)";
const creds = require("../config.json")

let config = {
    "user": creds.user,
    "host": "localhost",
    "database": creds.database,
    "port": "5432",
    "password": creds.password,
    "max": 10
}

let pool = new pg.Pool(config)

module.exports = {
    
    addData: function(parsedInput) {
        let newData = parsedInput

        pool.on('error', (err) => {
            console.error('Idle Client...', err)
            process.exit(1)
        })

        pool.connect((err, client, done) => {
            if(err) { 
                console.log('Connection Error in "addData"... ' + err) 
                return
            }
            client.query('CREATE TABLE IF NOT EXISTS userdata(userinput text)', function (err) {
                // done()
                if (err) throw new Error(err);
            })
            client.query(insertNewData, [newData], function (err, result) {
                console.log("added query ", result);
                
                done()
                if (err) throw new Error(err);
            })
        })
    },

    showAll: function(query, callback) {
        pool.on('error', (err) => {
            console.error('Idle Client...', err)
            process.exit(1)
        })

        pool.connect((err, client, done) => {
            if(err) { 
                console.log('Connection Error in "showAll"... ' + err) 
                callback(err)
            }
            client.query('SELECT * FROM userdata', function (err, result) {
                console.log("got it");
                
                done()
                if(err) callback(err)
                let json = JSON.stringify(result)
                callback(null, json)
            })
        })
    }

}