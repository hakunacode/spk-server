'use strict';

module.exports = function (Tbuser) {
  Tbuser.hashPassword = function (plain) {
    return plain;
  }
};
