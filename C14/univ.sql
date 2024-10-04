
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
   alamat VARCHAR(50) NOT NULL,
   id_jurusan CHARACTER(20) NOT NULL,
   FOREIGN KEY(id_jurusan) REFERENCES jurusan(id_jurusan)
);
INSERT INTO mahasiswa(nim, nama, alamat, id_jurusan) VALUES
('NI01', 'Rahmat', 'JL.Waluh', 'IDJ01'),
('NI02', 'Rohimat', 'JL.Kawal', 'IDJ02'),
('NI03', 'Asep', 'JL.Jalan', 'IDJ02');


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
   name_jurusan VARCHAR(50) NOT NULL
);
INSERT INTO jurusan(id_jurusan, name_jurusan) VALUES
('IT', 'ID02'),
('Tafsir', 'ID01');

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
('N66', 'Pak Muh'),
('N45', 'Pak Lawd');


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
('NI02', 'id02', 'NP45', 'E'),
('NI03', 'id03', 'NP01', 'E');






