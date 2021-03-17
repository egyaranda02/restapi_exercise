'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(req, res){
    response.ok("Aplikasi REST API berjalan", res);
};

// menampilkan data mhs
exports.tampilDataMhs = function(req,res){
    connection.query("SELECT * FROM mahasiswa", function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok(rows, res);
        }
    });
}

// Menampilkan data mhs berdasar id
exports.tampilDataMhsByID = function(req, res){
    let id = req.params.id;
    connection.query("SELECT * FROM mahasiswa WHERE id_mahasiswa = ?", [id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok(rows, res);
            }
        }
    );
}

// Menambah data
exports.tambahDataMhs = function(req, res){
    var npm = req.body.npm;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;

    connection.query("INSERT INTO mahasiswa (npm,nama,jurusan) VALUES(?,?,?)", [npm, nama, jurusan],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Berhasil menambah data mahasiswa", res);
            }
        }
    );
}

// PUT ubah data
exports.ubahDataMhs = function(req, res){
    var id = req.body.id_mahasiswa;
    var npm = req.body.npm;
    var nama = req.body.nama;
    var jurusan = req.body.jurusan;


    connection.query("UPDATE mahasiswa SET npm=?, nama=?, jurusan=? WHERE id_mahasiswa=?", [npm, nama, jurusan, id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data berhasil diubah", res);
            }
        });
}

// Delete data
exports.hapusDataMhs = function(req, res){
    var id = req.body.id_mahasiswa;
    connection.query("DELETE FROM mahasiswa WHERE id_mahasiswa=?",[id],
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.ok("Data berhasil dihapus", res);
            }
        });
}

// Menampilkan matakuliah group
exports.tampilGroup = function(req, res){
    connection.query("SELECT mahasiswa.id_mahasiswa, mahasiswa.npm, mahasiswa.nama, matakuliah.matakuliah, matakuliah.sks FROM krs JOIN matakuliah JOIN mahasiswa WHERE krs.id_matakuliah = matakuliah.id_matakuliah AND krs.id_mahasiswa = mahasiswa.id_mahasiswa ORDER BY mahasiswa.id_mahasiswa",
        function(error, rows, fields){
            if(error){
                console.log(error);
            }else{
                response.oknested(rows, res);
            }
        }

    );

}