'use strict';

module.exports = function (Tbcalendar) {
    let app = require('../../server/server');
    // edit member

    Tbcalendar.remoteMethod(
        'updateEvent', {
            accepts: [{
                arg: 'params',
                type: 'Object',
                required: true,
                http: { source: 'body' }
            }],
            returns: { arg: 'respon', type: 'object', root: true },
            http: {
                path: '/updateEvent',
                verb: 'post'
            }
        });

    Tbcalendar.updateEvent = function (params, cb) {
        console.log(params, 'paramsparams');
        let CalendarModel = app.models.TbCalendar;

        CalendarModel.updateAll({
            id: params.id
        }, {
                subject: params.subject,
                description: params.description,
                startDate: params.startDate,
                endDate: params.endDate,
                allDay: params.allDay,
                userid: params.userid
            }, function (err, req) {
                console.log(req, 'reqreqreq');
                if (err) {
                    cb(null, err);
                } else {
                    cb(null, req);
                }
            });
    }
    // delete
    Tbcalendar.remoteMethod(
        'deleteEvent', {
            accepts: [{
                arg: 'params',
                type: 'Object',
                required: true,
                http: { source: 'body' }
            }],
            returns: { arg: 'respon', type: 'object', root: true },
            http: {
                path: '/deleteEvent',
                verb: 'post'
            }
        });

    Tbcalendar.deleteEvent = function (params, cb) {
        console.log(params, 'paramsparams');
        let CalendarModel = app.models.TbCalendar;

        CalendarModel.deleteAll({
            id: params.id
        }, function (err, req) {
            console.log(req, 'reqreqreq');
            if (err) {
                cb(null, err);
            } else {
                cb(null, req);
            }
        });
    }
};
