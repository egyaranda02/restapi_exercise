'use strict';

module.exports = function(app){
    var jsonku = require('./controller');

    app.route('/')
        .get(jsonku.index);

    app.route('/tampil')
        .get(jsonku.tampilDataMhs);

    app.route('/tampil/:id')
        .get(jsonku.tampilDataMhsByID);

    app.route('/tambah')
        .post(jsonku.tambahDataMhs);
    app.route('/ubah')
        .put(jsonku.ubahDataMhs);
    app.route('/hapus')
        .delete(jsonku.hapusDataMhs);
    app.route('/krs')
        .get(jsonku.tampilGroup);
}