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
    database: 'vincentbank',
    multipleStatements: true,
});
db.connect();

/** Bodyparser middleware setup */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

/** Making the node accessible by React */
app.use(reactConnection());

/** Proses login user */
app.post('/loginuser', (req, res) => {
    var rekeningNasabah = req.body.rekening;
    var pinNasabah = req.body.kodepin;
    var sql = `SELECT * FROM nasabah`;

    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            for(var i=0; i < result.length; i++){
                if(rekeningNasabah === result[i].nomor_rekening && pinNasabah === result[i].kode_pin){
                    var status = 'login berhasil';
                    res.send(status);
                    break;
                } else if(i === result.length - 1){
                    var status = 'login gagal';
                    res.send(status);
                }
            }
        }
    })
});


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
    db.query(`SELECT * FROM nasabah WHERE nomor_rekening = "${rekeningNasabah}"`, (err, rows) => {
        if(err){
            throw err;
        } else if(!rows.length) {
            db.query(sql, (err, result) => {
                if(err){
                    throw err;
                } else {
                    var status = 'oke';
                    res.send(status);
                }
            });
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
            var status = 'oke';
            res.send(status);
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
            var status = 'oke';
            res.send(status);
        }
    });

});

/** Menampilkan jumlah saldo */
app.get('/saldo', (req, res) => {
    var sql = `SELECT * FROM deposit WHERE id = 2`;
    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            res.send(result);
        }
    });
});

/** Proses transfer dana */
app.post('/transferdana', (req, res) => {
    var rekeningTujuan = req.body.rekeningtujuan;
    var nominalTransfer = req.body.nominaltransfer;
    var kodepin = req.body.kodepin;
    var userid = 2;

    var addSaldo = `UPDATE deposit SET nominal = (nominal + "${nominalTransfer}") WHERE no_rekening = "${rekeningTujuan}"`;
    var substractSaldo = `UPDATE deposit SET nominal = (nominal - "${nominalTransfer}") WHERE id = "${userid}"`;

    db.query(`SELECT * FROM nasabah WHERE kode_pin = "${kodepin}"`, (err, result) => {
        if(err){
            throw err;
        } else if(!result.length) {
            var status = 'pin doesnt match';
            res.send(status);
        } else if(result.length){
            db.query(addSaldo, (error, result2) => {
                if(error) {
                    throw error;
                } else if(result2){
                    db.query(substractSaldo, (error2, result3) => {
                        if(error2){
                            throw error2;
                        } else {
                            var status = 'saldo berkurang';
                            res.send(status);
                        }
                    });
                    var status = 'saldo updated';
                    res.send(status);
                }
            });
            
        }
    });
});

/** Proses setor tunai */
app.post('/setortunai', (req, res) => {
    var rekening = req.body.rekening;
    var nominalSetor = req.body.nominalsetor;
    var kodepin = req.body.kodepin;

    var sql = `UPDATE deposit SET nominal = (nominal + "${nominalSetor}") WHERE no_rekening = "${rekening}"`;

    db.query(sql, (err, result) => {
        if(err){
            throw err;
        } else {
            var status = 'setor tunai berhasil';
            res.send(status);
        }
    });
});


/** Menjalankan web server */
app.listen(port, (req, res) => {
    console.log(`Server started on port ${port}`);
});



