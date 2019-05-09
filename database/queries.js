const pg = require("pg")
const insertNewData = "INSERT INTO userdata(date, description, brand, cost, style, size, color, pattern) values($1, $2, $3, $4, $5, $6, $7, $8)";
const insertSoldData = "UPDATE userdata SET sold = $1 WHERE id = $2 RETURNING sold";
const removeListing = "DELETE FROM userdata WHERE id = $1";
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

        let values = [parsedInput.date, parsedInput.description, parsedInput.brand, parsedInput.cost, 
            parsedInput.style, parsedInput.size, parsedInput.color, parsedInput.pattern]
        
        pool.on('error', (err) => {
            console.error('Idle Client...', err)
            process.exit(1)
        })

        pool.connect((err, client, done) => {
            if(err) { 
                console.log('Connection Error in "addData"... ' + err) 
                return
            }

           
            client.query(insertNewData, values, function (err, result) {
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

                done()
                if(err) callback(err)
                let json = JSON.stringify(result)
                callback(null, json)
            })
        })
    },
    soldStatus: function(parsedInput, callback) {

        let values = [parsedInput.soldStatus, parsedInput.id]

        pool.on('error', (err) => {
            console.error('Idle Client...', err)
            process.exit(1)
        })

        pool.connect((err, client, done) => {
            if(err) { 
                console.log('Connection Error in "addstatus"... ' + err) 
                return
            }
           
            client.query(insertSoldData, values, function (err, result) {

                done()
                if(err) callback(err)
                let json = JSON.stringify(result.rows[0])
                callback(null, json)
            })
        })
    },
    removeListing: function(parsedInput, callback) {

        let values = [parsedInput.id]

        pool.on('error', (err) => {
            console.error('Idle Client...', err)
            process.exit(1)
        })

        pool.connect((err, client, done) => {
            if(err) { 
                console.log('Connection Error in "addstatus"... ' + err) 
                return
            }
           
            client.query(removeListing, values, function (err, result) {
                console.log("remove query ", result);
                
                done()
                if(err) callback(err)
                let json = JSON.stringify(result)
                callback(null, json)
            })
        })
    },
    updateListing: function(parsedInput, callback) {

        let values = [parsedInput.id]

        pool.on('error', (err) => {
            console.error('Idle Client...', err)
            process.exit(1)
        })

        pool.connect((err, client, done) => {
            if(err) { 
                console.log('Connection Error in "addstatus"... ' + err) 
                return
            }
           
            client.query(removeListing, values, function (err, result) {
                console.log("remove query ", result);
                
                done()
                // if(err) callback(err)
                // let json = JSON.stringify(result)
                // callback(null, json)
            })
        })
    }

}