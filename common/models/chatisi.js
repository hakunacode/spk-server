'use strict';

module.exports = function (Chatisi) {
    // let request = require('request');
    let app = require('../../server/server');

    Chatisi.afterRemote('find', function (ctx, find, next) {
        // console.log(ctx.result[0].headerChat, 'DUMMY SERVER');

        Chatisi.find({
            where:
            { headerChat: ctx.result[0].headerChat }
        }, function (err, result) {
            // console.log(ctx.result[0].headerChat,'woww');
            // console.log(result,'wiw');
            if (result) {
                // console.log(result);
                Chatisi.app.mx.IO.emit('CHAT' + ctx.result[0].headerChat, result);
            }
        })

        next();
    });
};
