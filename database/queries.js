// const pg = require("pg")
// const insertNewData = "INSERT INTO userdata(userinput) values($1)";
// const creds = require("../config")

// let config = {
//     "user": creds.user,
//     "host": "postgres",
//     "database": creds.database,
//     "port": "5432",
//     "max": 10
// }

// let pool = new pg.Pool(config)

// module.exports = {
    
//     addData: function(parsedInput) {
//         let newData = parsedInput.user;

//         pool.on('error', (err, client) => {
//             console.error('Idle Client...', err)
//             process.exit(1)
//         })

//         pool.connect((err, client, done) => {
//             if(err) { 
//                 console.log('Connection Error in "addData"... ' + err) 
//                 return
//             }
//             client.query('CREATE TABLE IF NOT EXISTS userdata(userinput text)', function (err) {
//                 done()
//                 if (err) throw new Error(err);
//             })
//             client.query(insertNewData, [newData], function (err, result) {
//                 console.log(result);
                
//                 done()
//                 if (err) throw new Error(err);
//             })
//         })
//     },

//     showAll: function() {
//         pool.on('error', (err, client) => {
//             console.error('Idle Client...', err)
//             process.exit(1)
//         })

//         pool.connect((err, client, done) => {
//             if(err) { 
//                 console.log('Connection Error in "addData"... ' + err) 
//                 return
//             }
//             client.query('SELECT * FROM userdata', function (err, result) {
//                 console.log(result);
                
//                 done()
//                 if (err) throw new Error(err);
//             })
//         })
//     }

// }