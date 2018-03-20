'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todaysDate = (0, _moment2.default)().format('YYYY-MM-DD');
var nextWeek = (0, _moment2.default)().add(7, 'days').format('YYYY-MM-DD');

var params = ['description', 'end_time', 'name', 'place', 'start_time', 'id', 'attending_count', 'interested_count', 'category', 'cover', 'declined_count', 'maybe_count', 'timezone'];

var batchBuilder = function batchBuilder(inputArray) {
  var arr = [];
  inputArray.forEach(function (inp) {
    arr.push({
      method: 'get',
      relative_url: '/' + inp + '/events/?since=' + todaysDate + '&until=' + nextWeek + '&fields=' + params.join(',')
    });
  });

  return arr;
};

exports.default = batchBuilder;