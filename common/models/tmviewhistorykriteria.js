'use strict';

module.exports = function (Tmviewhistorykriteria) {
    var Excel = require('exceljs');
    var unstream = require('unstream');
    var loopback = require("loopback");
    let app = require('../../server/server');
    var common = require('../common-util');
    // date
    var d = new Date();
    var tgl = d.getDate();
    var bln = d.getMonth();
    var thn = d.getFullYear();
    var bulan = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",
        "Sep", "Oct", "Nov", "Dec");


    Tmviewhistorykriteria.remoteMethod(
        'exportExcel', {
            isStatic: true,
            accepts: [{
                arg: 'params',
                type: 'Object',
                required: true,
                http: { source: 'body' }
            }],
            returns: [{ arg: 'body', type: 'file', root: true }
                , {
                arg: 'Content-Type',
                type: 'string',
                http: {
                    target: 'header'
                }
            }, {
                arg: 'Content-Disposition',
                type: 'string',
                http: {
                    target: 'header'
                }
            }],
            http: {
                path: '/exportExcel',
                verb: 'get'
            }
        });

    Tmviewhistorykriteria.exportExcel = function (params, cb) {
        // Create workbook
        let tmMahasiswaModel = app.models.TmMahasiswa;
        var workbook = new Excel.Workbook();
        workbook.creator = 'UMJ';
        workbook.created = new Date();

        // Create sheet
        workbook.addWorksheet('Pembimbing TA');

        // Access worksheet
        var worksheet = workbook.getWorksheet('Pembimbing TA');

        worksheet.columns = [
            { header: 'NO.', key: 'idx', width: 5 },
            { header: 'NPM', key: 'nim', width: 30 },
            { header: 'NAMA', key: 'namamhs', width: 30 },
            { header: 'NO. TELEPHONE', key: 'telephone', width: 10 },
            { header: 'JUDUL PROPOSAL TUGAS AKHIR', key: 'judulskripsi', width: 30 },
            { header: 'PEMBIMBING 1', key: 'namadsn1', width: 30 },
            { header: 'PEMBIMBING 2', key: 'namadsn2', width: 30 },
        ];
        worksheet.getRow(1).font = { bold: true };
        worksheet.getRow(1).alignment = { horizontal: 'center' };

        let cell_fill = {
            type: 'pattern',
            pattern: 'solid',
            fgColor: { argb: 'FFFFFF00' },
            bgColor: { argb: 'FF0000FF' }
        }
        let cell_border = {
            top: { style: 'double' },
            left: { style: 'double' },
            bottom: { style: 'double' },
            right: { style: 'double' }
        }

        worksheet.getCell('A1').fill = cell_fill;
        worksheet.getCell('A1').border = cell_border;
        worksheet.getCell('B1').fill = cell_fill;
        worksheet.getCell('B1').border = cell_border;
        worksheet.getCell('C1').fill = cell_fill;
        worksheet.getCell('C1').border = cell_border;
        worksheet.getCell('D1').fill = cell_fill;
        worksheet.getCell('D1').border = cell_border;
        worksheet.getCell('E1').fill = cell_fill;
        worksheet.getCell('E1').border = cell_border;
        worksheet.getCell('F1').fill = cell_fill;
        worksheet.getCell('F1').border = cell_border;
        worksheet.getCell('G1').fill = cell_fill;
        worksheet.getCell('G1').border = cell_border;


        tmMahasiswaModel.find({
            where: {
                periode: params.periode
            }
        }, function (err, val) {
            let arrData = [];
            // console.log(val)
            common.asyncLoop(val.length, function (loop) {
                var index = loop.iteration();
                var item = val[index];

                Tmviewhistorykriteria.find({
                    where: {
                        and:
                        [{ idMahasiswa: item['id'] },
                        { hasil: 1 }]
                    }, order: 'id_fungsional DESC, bobot DESC'
                }, function (err, success) {
                    if (success.length != 0) {
                        arrData.push({
                            nim: item['nim'],
                            nama: item['nama'],
                            telephone: item['telphone'],
                            judulskripsi: item['judulskripsi'],
                            dosen1: success[0]['namadsn'],
                            dosen2: success[1]['namadsn']
                        });
                    }

                    // PANGGIL INI SETELAH DIANGGAP PROSES REQUEST SELESAI
                    loop.next();

                })

            }, function () {
                let idx = 0;
                for (let data of arrData) {
                    console.log(data, 11111)
                    idx++;
                    worksheet.addRow([
                        idx + '.',
                        data.nim,
                        data.nama,
                        data.telephone,
                        data.judulskripsi,
                        data.dosen1,
                        data.dosen2
                    ]);
                }
                workbook.xlsx.write(unstream({}, function (data) {
                    console.log(data);
                    cb(null, data, 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'attachment;filename=spkdp' + tgl + bulan[bln] + thn + '.xls');
                }));
            });

        });
    }
};
