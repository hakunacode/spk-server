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
    console.log(params, 111111111, params.nim);
    let tmMahasiswaModel = app.models.TmMahasiswa;
    let TbuserModel = app.models.TbUser;
    let UserModel = app.models.User;
    let ContainerModel = app.models.container;
    let RoleMappingModel = app.models.RoleMapping;

    // generate password default 
    params.password = TbuserModel.hashPassword(params.nim);
    let passwordEnc = UserModel.hashPassword(params.password);
    console.log(passwordEnc, 111)

    TbuserModel.create({
      username: params.nim.toLowerCase(),
      password: passwordEnc,
      status: 'Active',
      email: '',
      isuser: 'Mahasiswa'
    }, function (err, success) {
      console.log(success, 222222, err);
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
          tahunmasuk: params.tahunmasuk,
          judulskripsi: params.judulskripsi,
          kategori1: params.kategori1,
          kategori2: params.kategori2,
          kategori3: params.kategori3,
          userid: success.id
        }, function (err, response) {
          console.log(response, 'jj', err)
          if (err) {
            cb(null, []);
          } else {
            ContainerModel.createContainer({
              name: 'temp_' + success.id
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

  // add dosen 
  Auth.remoteMethod(
    'doAddDsn', {
      accepts: [{
        arg: 'params',
        type: 'Object',
        required: true,
        http: { source: 'body' }
      }],
      returns: { arg: 'respon', type: 'object', root: true },
      http: {
        path: '/doAddDsn',
        verb: 'post'
      }
    });

  Auth.doAddDsn = function (params, cb) {
    console.log(params, 111111111, params.nim);
    let tmDosenModel = app.models.TmDosen;
    let TbDetailKomptensiDosenModel = app.models.TbDetailKomptensiDosen;
    let TbuserModel = app.models.TbUser;
    let UserModel = app.models.User;
    let ContainerModel = app.models.container;
    let RoleMappingModel = app.models.RoleMapping;

    // generate password default 
    params.password = TbuserModel.hashPassword(params.nidn);
    let passwordEnc = UserModel.hashPassword(params.password);
    console.log(passwordEnc, 111)

    TbuserModel.create({
      username: params.nidn.toLowerCase(),
      password: passwordEnc,
      status: 'Active',
      email: '',
      isuser: 'Dosen'
    }, function (err, success) {
      console.log(success, 222222, err);
      if (err) {
        cb(null, []);
      } else {
        // cb(null, success);
        tmDosenModel.create({
          nidn: params.nidn,
          alamat: params.alamat,
          created: params.createddate,
          pictures: params.pictures,
          jeniskelamin: params.jeniskelamin,
          idFungsional: params.idFungsional,
          idKompetensi: params.idKompetensi,
          idKuota: params.idKuota,
          nama: params.nama,
          idPendidikan: params.idPendidikan,
          telephone: params.telephone,
          ttl: params.ttl,
          userid: success.id
        }, function (err, response) {
          console.log(response, 'jj', err)
          if (err) {
            cb(null, []);
          } else {
            var arrdetail = [];
            var idx_kategori = Math.floor(Math.random() * 3);
            for (let j = 1; j < 4; j++) {
              if (j == idx_kategori) {
                arrdetail[j] = 1;
              } else {
                arrdetail[j] = Math.floor(Math.random() * 2) / 3;
              }
              TbDetailKomptensiDosenModel.create({
                idDosen: response['id'],
                idKompetensi: j,
                bobot: arrdetail[j]
              }, function (err, valq) {
                console.log('sikses detail insert');

              });
            }
            // 
            ContainerModel.createContainer({
              name: 'temp_' + success.id
            }, function (err, req) {
              if (err) {
                cb(null, []);
              } else {
                RoleMappingModel.create({
                  principalType: 'Dosen',
                  principalId: success.id,
                  roleId: 3
                }, function (err, val) {
                  if (err) {
                    cb(null, []);
                  } else {
                    cb(null, val);
                  }
                });
              }
            });
            // 
          }
        });
      }
    });
  }

  // remote methode login

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
    console.log(params, 111);
    let tbuserModel = app.models.TbUser;
    let RoleMappingModel = app.models.RoleMapping;
    tbuserModel.find({
      where: { username: params.username, status: 'Active' }
    }, function (err, val) {
      console.log(val);
      if (val.length) {
        RoleMappingModel.find({
          where: { principalId: val[0]['id'] }
        }, function (err, req) {
          tbuserModel.login({
            username: params.username.toLowerCase(),
            password: params.password,
            ttl: 60 * 60 * 24 * 30
          }, function (err, result) {
            if (err) {
              cb(null, err);
            } else {
              cb(null, [{ result, val, req }]);
            }
          });
        });
      } else {
        cb(null,[]);
      }
    });
  }


  Auth.remoteMethod(
    'changePass', {
      accepts: [{
        arg: 'params',
        type: 'Object',
        required: true,
        http: { source: 'body' }
      }],
      returns: { arg: 'respon', type: 'object', root: true },
      http: {
        path: '/changePass',
        verb: 'post'
      }
    });

  Auth.changePass = function (params, cb) {
    console.log(params, '12345');
    let tbuserModel = app.models.TbUser;
    let UserModel = app.models.User;

    params.password = tbuserModel.hashPassword(params.newPassword);
    let passwordEnc = UserModel.hashPassword(params.password);

    tbuserModel.updateAll({
      id: params.userid
    }, {
        password: passwordEnc
      }
      , function (err, value) {
        if (err) {
          cb(null, []);
        } else {
          cb(null, value);
        }
      })
  }

};
