-- Adminer 4.3.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `deposit`;
CREATE TABLE `deposit` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `no_rekening` int(50) NOT NULL,
  `nominal` int(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `deposit` (`id`, `user_id`, `no_rekening`, `nominal`, `created`) VALUES
(1,	1,	1006696863,	101035000,	'2018-07-20 09:46:54'),
(2,	2,	1006696864,	149000000,	'2018-07-20 09:47:26'),
(3,	3,	1006696868,	200000000,	'2018-07-20 08:39:11'),
(4,	4,	1006696855,	250000000,	'2018-07-20 08:39:31'),
(5,	5,	1006696856,	300000000,	'2018-07-20 08:39:48'),
(6,	6,	1006696857,	100000000,	'2018-07-20 08:40:03'),
(7,	7,	1006696858,	120000000,	'2018-07-20 09:13:18');

DROP TABLE IF EXISTS `nasabah`;
CREATE TABLE `nasabah` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `nama_lengkap` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `alamat` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `nomor_handphone` varchar(15) COLLATE utf8_unicode_ci NOT NULL,
  `jenis_kelamin` enum('Pria','Wanita') COLLATE utf8_unicode_ci NOT NULL,
  `tanggal_lahir` date NOT NULL,
  `nomor_rekening` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `kode_pin` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `groups` enum('Admin','User') COLLATE utf8_unicode_ci NOT NULL,
  `username` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `nasabah` (`id`, `nama_lengkap`, `email`, `alamat`, `nomor_handphone`, `jenis_kelamin`, `tanggal_lahir`, `nomor_rekening`, `kode_pin`, `groups`, `username`, `password`, `created`) VALUES
(1,	'Paul Pogba',	'pogba@mail.com',	'Paris, France',	'081385972198',	'Pria',	'1994-09-05',	'1006696863',	'190992',	'Admin',	'admin',	'admin',	'2018-07-20 06:45:17'),
(2,	'Antoinne Griezmann',	'antoinne.grizman@mail.com',	'Lille, France',	'081285972197',	'Pria',	'1992-09-06',	'1006696864',	'190993',	'User',	'',	'',	'2018-07-20 07:12:05'),
(3,	'Dimas Septyanto',	'dimas@mail.com',	'Bekasi, Indonesia',	'0812859629719',	'Pria',	'1992-09-19',	'1006696868',	'190992',	'User',	'',	'',	'2018-07-20 07:56:20'),
(4,	'Farah Tasya Novana',	'farah@mail.com',	'Bekasi, Indonesia',	'081882992929',	'Wanita',	'1993-09-18',	'1006696855',	'190992',	'User',	'',	'',	'2018-07-20 08:39:23'),
(5,	'Agus Budiman',	'agus@mail.com',	'Jakarta, Indonesia',	'0812882829929',	'Pria',	'1992-08-24',	'1006696856',	'12345',	'User',	'',	'',	'2018-07-20 08:39:42'),
(6,	'Razgriz Ytechka',	'razgriz@mail.com',	'Moscow, Russia',	'09128882928278',	'Pria',	'1990-01-01',	'1006696857',	'12345',	'User',	'',	'',	'2018-07-20 08:39:58'),
(7,	'Samid Midun',	'samid@mail.com',	'Melbourne, Australia',	'081298288291',	'Pria',	'1992-09-19',	'1006696858',	'12345',	'User',	'',	'',	'2018-07-20 08:40:14');

DROP TABLE IF EXISTS `setoran_log`;
CREATE TABLE `setoran_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) NOT NULL,
  `nominal_setor` int(50) NOT NULL,
  `waktu_transaksi` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `setoran_log` (`id`, `userid`, `nominal_setor`, `waktu_transaksi`) VALUES
(1,	1,	10000000,	'2018-02-11 00:00:00'),
(2,	2,	5000000,	'2018-04-10 00:00:00'),
(3,	3,	8000000,	'2018-05-10 00:00:00'),
(4,	4,	15000000,	'2018-06-13 00:00:00'),
(5,	5,	4500000,	'2018-06-10 00:00:00'),
(6,	3,	5000000,	'2018-06-20 00:00:00'),
(7,	6,	8000000,	'2018-07-20 00:00:00');

DROP TABLE IF EXISTS `transfer_log`;
CREATE TABLE `transfer_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid_sender` int(11) NOT NULL,
  `userid_receiver` int(11) NOT NULL,
  `nominal` int(50) NOT NULL,
  `waktu_transaksi_transfer` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

INSERT INTO `transfer_log` (`id`, `userid_sender`, `userid_receiver`, `nominal`, `waktu_transaksi_transfer`) VALUES
(1,	1,	2,	10000000,	'2018-07-20'),
(2,	2,	3,	9000000,	'2018-03-11'),
(3,	3,	4,	5000000,	'2018-04-15'),
(4,	4,	5,	8500000,	'2018-06-13'),
(5,	5,	6,	7500000,	'2018-05-15'),
(6,	5,	1,	10000000,	'2018-06-07');

-- 2018-07-20 10:59:57
