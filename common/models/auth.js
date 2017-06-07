'use strict';

module.exports = function (Auth) {
  let app = require('../../server/server');

  Auth.remoteMethod(
    'doAddMhs', {
      accepts: [{
        arg: 'params',
        type: 'Object',
        required: true,
        http: { source: 'body' }
      }],
      returns: { arg: 'respon', type: 'object', root: true },
      http: {
        path: '/doAddMhs',
        verb: 'post'
      }
    });

  Auth.doAddMhs = function (params, cb) {
    console.log(params, 111111111,params.nim);
    let tmMahasiswaModel = app.models.TmMahasiswa;
    let TbuserModel = app.models.TbUser;
    let UserModel = app.models.User;
    let ContainerModel = app.models.container;
    let RoleMappingModel = app.models.RoleMapping;

    // generate password default 
    // params.password = TbuserModel.hashPassword(params.nim);
    let passwordEnc = UserModel.hashPassword(params.nim);
    console.log(passwordEnc,111)

    TbuserModel.create({
      username: params.nim,
      password: passwordEnc,
      status: 'Active'
    }, function (err, success) {
      console.log(success,222222);
      if (err) {
        cb(null, []);
      } else {
        // cb(null, success);
        tmMahasiswaModel.create({
          nim: params.nim,
          nama: params.nama,
          ttl: params.ttl,
          pictures: params.pictures,
          jenisKelamin: params.jenisKelamin,
          jenjang: params.jenjang,
          tanggalMasuk: params.tanggalMasuk,
          jurusan: params.jurusan,
          userid: success.id
        }, function (err, response) {
          if (err) {
            cb(null, []);
          } else {
            ContainerModel.createContainer({
              name: params.nim
            }, function (err, req) {
              if (err) {
                cb(null, []);
              } else {
                RoleMappingModel.create({
                  principalType: 'Mahasiswa',
                  principalId: success.id,
                  roleId: 2
                }, function (err, val) {
                  if (err) {
                    cb(null, []);
                  } else {
                    cb(null, val);
                  }
                });
              }
            });
          }
        });
      }
    });
  }

  Auth.remoteMethod(
    'doLogin', {
      accepts: [{
        arg: 'params',
        type: 'Object',
        required: true,
        http: { source: 'body' }
      }],
      returns: { arg: 'respon', type: 'object', root: true },
      http: {
        path: '/doLogin',
        verb: 'post'
      }
    });

  Auth.doLogin = function (params, cb) {
    let tbuserModel = app.models.tbuser;
  }
};
