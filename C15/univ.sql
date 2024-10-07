-- no 1

SELECT DISTINCT mahasiswa.nim, mahasiswa.nama, mahasiswa.tgl_lahir, mahasiswa.alamat FROM mahasiswa INNER JOIN jurusan ON jurusan.id_jurusan = jurusan.id_jurusan; 

NI01|Rahmat|2006-03-14|JL.Waluh
NI02|Rohimat|2000-06-16|JL.Kawal
NI03|Isnain|2005-03-14|JL.Jalan

-- no 2

SELECT *, 
(strftime('%Y', 'now') - strftime('%Y', tgl_lahir)) AS umur
FROM mahasiswa
ORDER BY umur ASC;

NI01|Rahmat|2006-03-14|JL.Waluh|IDJ01|18
NI03|Isnain|2005-03-14|JL.Jalan|IDJ02|19
NI02|Rohimat|2000-06-16|JL.Kawal|IDJ02|24

 SELECT *,        
(strftime('%Y', 'now') - strftime('%Y', tgl_lahir)) AS umur
FROM mahasiswa
ORDER BY umur DESC; 

NI02|Rohimat|2000-06-16|JL.Kawal|IDJ02|24
NI03|Isnain|2005-03-14|JL.Jalan|IDJ02|19
NI01|Rahmat|2006-03-14|JL.Waluh|IDJ01|18

-- no 3 y

SELECT mahasiswa.nim, mahasiswa.nama, assignment.nilai
FROM mahasiswa
JOIN assignment ON mahasiswa.nim = assignment.nim
WHERE assignment.nilai IN ('A', 'B');

NI01|Rahmat|B

-- no 4

SELECT * FROM matakuliah
WHERE sks > 10;
id04|Lil Jonh|11

-- no 5

SELECT * FROM mahasiswa JOIN matakuliah ON matakuliah.id_matakuliah = matakuliah.id_matakuliah WHERE matakuliah.nama = 'Data Mining';

NI01|Rahmat|2006-03-14|JL.Waluh|IDJ01|id03|Data Mining|3
NI02|Rohimat|2000-06-16|JL.Kawal|IDJ02|id03|Data Mining|3
NI03|Isnain|2005-03-14|JL.Jalan|IDJ02|id03|Data Mining|3

-- no 6

SELECT dosen.*, COUNT(DISTINCT mahasiswa.nim) AS jumlah_mahasiswa FROM assignment JOIN mahasiswa ON assignment.nim 
= mahasiswa.nim JOIN dosen ON assignment.nip = dosen.nip GROUP BY dosen.nip;    

NP45|Pak Lawd|1  
NP66|Pak Muh|1

-- no 7

SELECT DISTINCT mahasiswa.* FROM mahasiswa ORDER BY mahasiswa.tgl_lahir ASC; 

NI02|Rohimat|2000-06-16|JL.Kawal|IDJ02
NI03|Isnain|2005-03-14|JL.Jalan|IDJ02
NI01|Rahmat|2006-03-14|JL.Waluh|IDJ01

SELECT DISTINCT mahasiswa.* FROM mahasiswa ORDER BY mahasiswa.tgl_lahir DESC;

NI01|Rahmat|2006-03-14|JL.Waluh|IDJ01
NI03|Isnain|2005-03-14|JL.Jalan|IDJ02
NI02|Rohimat|2000-06-16|JL.Kawal|IDJ02


-- no 8

