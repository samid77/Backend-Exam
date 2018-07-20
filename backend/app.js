const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const reactConnection = require('cors');
var port = 8002;
const app = express();

/** Register the database and connect */
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '8889',
    database: 'vincentbank'
});
db.connect();

/** Bodyparser middleware setup */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/** Making the node accessible by React */
app.use(reactConnection());


/** Daftar nasabah */
app.get('/daftarnasabah', (req, res) => {
    var sql = `SELECT * FROM nasabah`;
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send(result);
        }
    });
})

app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);
});



