-- no 1

SELECT mahasiswa.*, jurusan.nama_jurusan 
FROM mahasiswa INNER JOIN jurusan ON jurusan.id_jurusan = mahasiswa.id_jurusan; 

NI01|Rahmat|2006-03-14|JL.Waluh
NI02|Rohimat|2000-06-16|JL.Kawal
NI03|Isnain|2005-03-14|JL.Jalan

-- no 2


SELECT *,        
(strftime('%Y', 'now') - strftime('%Y', tgl_lahir)) AS umur
FROM mahasiswa 
WHERE umur < 20 
ORDER BY umur; 

NI01|Rahmat|2006-03-14|JL.Waluh|IDJ01|18
NI03|Isnain|2005-03-14|JL.Jalan|IDJ02|19

-- no 3 y

SELECT mahasiswa.nim, mahasiswa.nama, assignment.nilai
FROM mahasiswa
JOIN assignment ON mahasiswa.nim = assignment.nim
WHERE assignment.nilai IN ('A', 'B');

NI01|Rahmat|B

-- no 4

SELECT mahasiswa.nim, mahasiswa.nama, sum(matakuliah.sks) AS total_sks 
FROM assignment 
INNER JOIN mahasiswa ON assignment.nim = mahasiswa.nim 
INNER JOIN matakuliah ON assignment.id_matakuliah = matakuliah.id_matakuliah 
GROUP BY mahasiswa.nim
HAVING total_sks > 10; 

NI01|Rahmat|11

-- no 5

SELECT * , matakuliah.nama 
FROM assignment 
JOIN matakuliah ON assignment.id_matakuliah = matakuliah.id_matakuliah 
WHERE matakuliah.nama LIKE '%Data Mining%';

5|NI01|id03|NP45|D|id03|Data Mining|3|Data Mining

-- no 6

SELECT dosen.*, COUNT(DISTINCT mahasiswa.nim) AS jumlah_mahasiswa 
FROM assignment 
JOIN mahasiswa ON assignment.nim = mahasiswa.nim 
JOIN dosen ON assignment.nip = dosen.nip 
GROUP BY dosen.nip; 

NP45|Pak Lawd|1  
NP66|Pak Muh|2

-- no 7

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


-- no 8

SELECT 
       mahasiswa.nama,
       mahasiswa.nim,
       mahasiswa.tgl_lahir,
       mahasiswa.alamat,
       jurusan.id_jurusan,
       jurusan.nama_jurusan,
       dosen.nip,
       dosen.nama,
       matakuliah.nama,
       matakuliah.id_matakuliah,
       assignment.nilai
FROM assignment
JOIN mahasiswa ON assignment.nim = mahasiswa.nim
JOIN matakuliah ON assignment.id_matakuliah = matakuliah.id_matakuliah
JOIN jurusan ON mahasiswa.id_jurusan = jurusan.id_jurusan
JOIN dosen ON assignment.nip = dosen.nip  
WHERE assignment.nilai IN ('D', 'E');

SELECT 
       mahasiswa.nama,
       mahasiswa.nim,
       mahasiswa.tgl_lahir,
       mahasiswa.alamat,
       jurusan.id_jurusan,
       jurusan.nama_jurusan,
       dosen.nip,
       dosen.nama,
       matakuliah.nama,
       matakuliah.id_matakuliah,
       assignment.nilai
FROM assignment, mahasiswa, matakuliah, jurusan, dosen
WHERE 
      assignment.nim = mahasiswa.nim      
      AND assignment.id_matakuliah = matakuliah.id_matakuliah
      AND mahasiswa.id_jurusan = jurusan.id_jurusan
      AND assignment.nip = dosen.nip
      AND assignment.id_matakuliah = matakuliah.id_matakuliah
      AND assignment.nilai IN ('D', 'E');