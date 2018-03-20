'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const fs = require( 'fs' )
// const path = require( 'path' )
// const log = require( './logFile' )

var currentDir = _path2.default.resolve(process.cwd());

var getKey = function getKey(input) {
  return new Promise(function (resolve, reject) {
    _fs2.default.readFile(currentDir + '/keys', 'utf8', function (err, data) {
      if (err) {
        reject(err);

        return;
      }
      var key = JSON.parse(data)[input];
      // log.KEYS[input] = key
      resolve(key);
    });
    // console.log(`LOG:\tRetrieved ${input} key`);
  }).catch(function (err) {
    return console.log(err);
  });
};

exports.default = getKey;