'use strict';

module.exports = function (Tbchatroomlist) {
    let app = require('../../server/server');

    Tbchatroomlist.remoteMethod('loadFirstChat', {
        accepts: [{
            arg: 'params',
            type: 'Object',
            required: true
        }],
        returns: {
            arg: 'accessToken', type: 'object', root: true,
        },
        http: {
            path: '/loadFirstChat',
            verb: 'post'
        }
    });

    Tbchatroomlist.loadFirstChat = function (params, cb) {
        let loadFirstChatModel = app.models.TbChatroomlist;
        loadFirstChatModel.find({
            where: {
                and: [{ userid: params.userid }, { chatroomid: params.chatroomid }]
            }
        }, function (err, result) {
            if (!err) {
                console.log('SUKSSESSSS', result);
                cb(null, result);
            } else {
                cb(null, []);
            }
        });
    }

    //CHAT LIST IN
    Tbchatroomlist.remoteMethod('ChatListIn', {
        accepts: [{
            arg: 'params',
            type: 'Object',
            required: true
        }],
        returns: {
            arg: 'accessToken', type: 'object', root: true,
        },
        http: {
            path: '/ChatListIn',
            verb: 'post'
        }
    });

    Tbchatroomlist.ChatListIn = function (params, cb) {
        console.log(params,1111111);
        let ChatListInModel = app.models.TbChatroomlist;
        ChatListInModel.find({
            where: {
                and: [{ userid: params.userid }, { useridto: params.useridto }]
            },
            limit: params.limit,
            skip: params.skip
        }, function (err, result) {
            console.log('ChatListIn', result);
            if (!err) {
                cb(null, result);
            } else {
                cb(null, []);
            }
        });
    }
    //end CHAT LIST IN

    Tbchatroomlist.remoteMethod('ChatList', {
        accepts: [{
            arg: 'params',
            type: 'Object',
            required: true
        }],
        returns: {
            arg: 'accessToken', type: 'object', root: true,
        },
        http: {
            path: '/ChatList',
            verb: 'post'
        }
    });

    Tbchatroomlist.ChatList = function (params, cb) {
        let ChatListModel = app.models.TbChatroomlist;
        ChatListModel.find({
            where: {
                userid: params.tokenId
            }, include: 'memberpersonal'
        }, function (err, result) {
            if (!err) {
                console.log('SUKSSESSSS', result);
                cb(null, result);
            } else {
                cb(null, []);
            }
        });
    }


    Tbchatroomlist.remoteMethod('createChatList', {
        accepts: [{
            arg: 'params',
            type: 'Object',
            required: true
        }],
        returns: {
            arg: 'accessToken', type: 'object', root: true,
        },
        http: {
            path: '/createChatList',
            verb: 'post'
        }
    });

    Tbchatroomlist.createChatList = function (params, cb) {
        let ChatroomlistModel = app.models.TbChatroomlist;
        ChatroomlistModel.create({
            chatroomid: params.chatroomid,
            userid: params.userid,
            useridto: params.useridto,
            created: params.createddate
        }, function (err, result) {
            if (!err) {
                console.log('SUKSSESSSS', result);
                cb(null, result);
            } else {
                cb(null, []);
            }
        });
    }

};
