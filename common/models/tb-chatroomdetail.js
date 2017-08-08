'use strict';

module.exports = function (Tbchatroomdetail) {
    let app = require('../../server/server');

    Tbchatroomdetail.remoteMethod('detailChat', {
        accepts: [{
            arg: 'params',
            type: 'Object',
            required: true
        }],
        returns: {
            arg: 'accessToken', type: 'object', root: true,
        },
        http: {
            path: '/detailChat',
            verb: 'post'
        }
    });

    Tbchatroomdetail.detailChat = function (params, cb) {
        console.log(params.chatroomid, 'ooopaa');

        let ChatroomdetailModel = app.models.TbChatroomdetail;
        ChatroomdetailModel.find({
            where: {
                chatroomid: params.chatroomid
            }, order: 'created ASC'
        }, function (err, result) {
            console.log(result, 'HASIL');
            if (!err) {
                cb(null, result);
            } else {
                cb(null, []);
            }
        });
    }

    Tbchatroomdetail.remoteMethod('createChat', {
        accepts: [{
            arg: 'params',
            type: 'Object',
            required: true
        }],
        returns: {
            arg: 'accessToken', type: 'object', root: true,
        },
        http: {
            path: '/createChat',
            verb: 'post'
        }
    });

    Tbchatroomdetail.createChat = function (params, cb) {
        let ChatroomdetailModel = app.models.TbChatroomdetail;
        ChatroomdetailModel.create({
            chatroomid: params.chatroomid,
            userid: params.userid,
            textchat: params.textchat,
            created: params.createddate
        }, function (err, result) {
            console.log(result, 'HASIL');
            if (!err) {
                Tbchatroomdetail.app.mx.IO.emit("ok", result);
                console.log('SUKSSESSSS', result);
                cb(null, result);
            } else {
                cb(null, err);
            }
        });
    }
};
