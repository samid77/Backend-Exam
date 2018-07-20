/** 1. History transfer 30 hari terakhir untuk user tertentu **/
SELECT nama_lengkap, nominal, waktu_transaksi_transfer FROM transfer_log JOIN nasabah ON nasabah.id = transfer_log.userid_sender
WHERE waktu_transaksi BETWEEN NOW() - INTERVAL 30 DAY AND NOW() AND userid_sender = 1;

/** 2. History setor tunai 30 hari terakhir **/
SELECT nama_lengkap, nominal_setor, waktu_transaksi FROM setoran_log JOIN nasabah ON nasabah.id = setoran_log.userid
WHERE waktu_transaksi BETWEEN NOW() - INTERVAL 30 DAY AND NOW() AND userid = 1;

/** 3. Urutan nasabah yang melakukan transfer dari paling sering ke paling jarang (tampilkan berapa kali melakukan transfernya pada setiap nasabah).
**/
SELECT userid_sender AS Pengirim, COUNT(userid_sender)AS Jumlah FROM transfer_log GROUP BY userid_sender DESC;

/** 4. Urutan nasabah yang melakukan jumlah nominal setoran tunai dari paling banyak ke paling sedikit (tampilkan jumlah nominal setoran tunai pada setiap nasabah).**/
SELECT userid, sum( nominal_setor ) AS jumlah FROM setoran_log GROUP BY userid ORDER BY jumlah DESC

/** 5. History Mutasi Rekening nasabah tertentu (Gabungan Transfer dan Setoran Tunai) pada bulan Juli 2018 saja. **/
SELECT nama_lengkap, nominal, nominal_setor, waktu_transaksi, waktu_transaksi_transfer FROM nasabah LEFT JOIN transfer_log ON transfer_log.userid_sender = nasabah.id LEFT JOIN setoran_log ON setoran_log.userid = nasabah.id WHERE waktu_transaksi >= ('2018-07-01 00:00') AND waktu_transaksi <= ('2018-07-31') AND nama_lengkap = 'Razgriz Ytechka';


