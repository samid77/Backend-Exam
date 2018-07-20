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

/** Tambah Data Nasabah */
app.post('/saveData', (req, res) => {
    var namaNasabah = req.body.namalengkap;
    var emailNasabah = req.body.email;
    var alamatNasabah = req.body.alamat;
    var hpNasabah = req.body.handphone;
    var tanggalNasabah = req.body.tanggallahir;
    var rekeningNasabah = req.body.rekening;
    var kodepinNasabah = req.body.kodepin;

    var sql = `INSERT INTO nasabah VALUES("${''}", "${namaNasabah}", "${emailNasabah}", "${alamatNasabah}", "${hpNasabah}", "${'Pria'}", "${tanggalNasabah}", "${rekeningNasabah}", "${kodepinNasabah}", "${'User'}", "${''}", "${''}", "${''}")`;

    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            var status = 'oke';
            res.send('Database tersimpan');
        }
    });
});

/** Grab Data Nasabah untuk di edit */
app.get('/editdata/:id', (req, res) => {
    var sql = `SELECT * FROM nasabah WHERE id = ${req.params.id}`;
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send(result);
        }
    });
});

/** Proses mengupdate data nasabah */
app.post('/updateData', (req, res) => {
    var id = req.body.id;
    var namaNasabah = req.body.namalengkap;
    var emailNasabah = req.body.email;
    var alamatNasabah = req.body.alamat;
    var hpNasabah = req.body.nomorhandphone;
    var jenisKelamin = req.body.jeniskelamin;
    var tanggalNasabah = req.body.tanggallahir;
    var rekeningNasabah = req.body.rekening;
    var pinNasabah = req.body.kodepin;
    var grupNasabah = req.body.groups;
    var usernameNasabah = req.body.usernamenasabah;
    var passwordNasabah = req.body.passwordnasabah;

    var sql = `UPDATE nasabah SET nama_lengkap = "${namaNasabah}", email = "${emailNasabah}", alamat = "${alamatNasabah}", nomor_handphone = "${hpNasabah}", jenis_kelamin = "${jenisKelamin}", tanggal_lahir = "${tanggalNasabah}" WHERE id = "${id}"`;

    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        } else {
            res.send(result);
        }
    });

});
/** Delete data nasabah */
app.post('/deleteData', (req, res) => {
    var id = req.body.id;
    var sql = `DELETE FROM nasabah WHERE id = "${id}"`;
    db.query(sql, (err, result) => {
        if(err) {
            throw err;
        } else {
            res.send(result);
        }
    });

});



/** Menjalankan web server */
app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);
});



