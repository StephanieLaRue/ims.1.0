const pg = require("pg")
const insertNewData = "INSERT INTO userdata(date, description, brand, cost, style, size, color, pattern) values($1, $2, $3, $4, $5, $6, $7, $8)";
const insertSoldData = "INSERT INTO userdata(sold) values($9)";
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
    addSoldStatus: function(parsedInput) {

        let values = [parsedInput.soldStatus]
        console.log(values);
         return
        
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
                console.log("added sold query ", result);
                
                done()
                if (err) throw new Error(err);
            })
        })
    }

}