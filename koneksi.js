var mysql = require('mysql');

// koneksi db
const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'coba'
})

conn.connect((err)=>{
    if(err) throw err;
    console.log('MySQL terkoneksi');
});

module.exports = conn;