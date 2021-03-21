const jwt = require('jsonwebtoken');
const config = require('../config/secret');

function verifikasi(){
    return function(req, rest, next){
        // cek authorization
        var role = req.body.role;
        var tokenWithBearer = req.headers.authorization;
        if(tokenWithBearer){
            var token = tokenWithBearer.split(' ')[1];
            // verifikasi
            jwt.verify(token, config.secret, function(err, decoded){
                if(err){
                    return rest.status(401).send({auth:false, message:"Token tidak terdaftar!"});
                }else{
                    if(role==2){
                        req.auth = decoded;
                        next();
                    }else{
                        return rest.status(401).send({auth:false, message:"Gagal authorisasi role anda!"});
                    }
                }
            });
        }else{
            return rest.status(401).send({auth:false, message:"Token tidak tersedia!"});
        }
    }
}
module.exports = verifikasi;