
-- table mahasiswa
-- ==============================================================================
-- NIM (PK) CHARACTER(20)           nama    alamat			id_jurusan(FK)		
-- ==============================================================================
-- 0001                            Samir   JL.Sesat Sendiri	A01
-- 0002				            Dirga	JL.Kapan Jalan		C02
-- 1003				Fulan	JL.Haji Mamats		B02

CREATE TABLE mahasiswa (
   nim CHARACTER(20) PRIMARY KEY NOT NULL,
   nama VARCHAR(50) NOT NULL,
   tgl_lahir DATE NOT NULL,
   alamat VARCHAR(50) NOT NULL,
   id_jurusan CHARACTER(20) NOT NULL,
   FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
);
INSERT INTO mahasiswa(nim, nama, tgl_lahir, alamat, id_jurusan) VALUES
('NI01', 'Rahmat',  '2006-03-14','JL.Waluh', 'IDJ01'),
('NI02', 'Rohimat', '2000-06-16','JL.Kawal', 'IDJ02'),
('NI03', 'Isnain',  '2005-03-14','JL.Jalan', 'IDJ02');


-- table assignment
-- =====================================================
-- id(PK)	integer		NIM(FK)		ID_matakuliah(FK) 	id_dosen(FK)	nilai	
-- =====================================================
-- 1			0001		P01			0001		E
-- 2 			0001		P02			0002		B
-- 3			1003		P01			0001		D

-- table jurusan	
-- =====================================================
-- id_jurusan(PK) CHARACTER(20)	nama_jurusan	
-- =====================================================
-- 01				It
-- 02				Hukum
-- 03				Ilmu Tafsir

CREATE TABLE jurusan(
   id_jurusan CHARACTER(20) PRIMARY KEY NOT NULL,
   nama_jurusan VARCHAR(50) NOT NULL
);
INSERT INTO jurusan(id_jurusan, nama_jurusan) VALUES
('IDJ01', 'Teknik Mesin'),
('IDJ02', 'Teknik Las');
-- table dosen 	
-- =====================================================
-- NIP(PK) CHARACTER(15)		nama		
-- =====================================================
-- 0001 				Pak Muh	
-- 0002				Haji Noerdin

CREATE TABLE dosen (
   nip CHARACTER(15) PRIMARY KEY NOT NULL,
   nama VARCHAR(50) NOT NULL
);
INSERT INTO dosen( nip, nama) VALUES
('NP66', 'Pak Muh'),
('NP45', 'Pak Lawd');


-- table matakuliah
-- =====================================================
-- id_matakuliah(PK) CHARACTER(10)	nama	sks			
-- =====================================================
-- P01				MIPA	3
-- P02				IPS	3

CREATE TABLE matakuliah(
   id_matakuliah CHARACTER(10) PRIMARY KEY NOT NULL,
   nama VARCHAR(30) NOT NULL,
   sks INTEGER NOT NULL
);
INSERT INTO matakuliah( id_matakuliah, nama, sks) VALUES
('id01', 'Lil Muh', 2),
('id02', 'Kapal Lawd', 3),
('id03', 'Putra Kircon', 3);
('id03', 'Putra Kircon', 3);


CREATE TABLE assignment(
   id INTEGER PRIMARY KEY AUTOINCREMENT,
   nim CHARACTER(20) NOT NULL,
   id_matakuliah CHARACTER(10) NOT NULL,
   nip CHARACTER(20) NOT NULL,
   nilai CHARACTER(5),
   FOREIGN KEY(nip) REFERENCES dosen(nip),
   FOREIGN KEY(nim) REFERENCES mahasiswa(nim),
   FOREIGN KEY(id_matakuliah) REFERENCES matakuliah(id_matakuliah)
);
INSERT INTO assignment(nim, id_matakuliah, nip, nilai) VALUES
('NI01', 'id01', 'NP66', 'B'),
('NI02', 'id01', 'NP66', 'E'),
('NI01', 'id02', 'NP66', 'B'),
('NI01', 'id03', 'NP45', 'D'),
('NI01', 'id04', 'NP45', 'A')
;

