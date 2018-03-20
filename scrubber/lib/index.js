'use strict';

var _fb = require('fb');

var _getKey = require('./utils/getKey');

var _getKey2 = _interopRequireDefault(_getKey);

var _batchBuilder = require('./utils/batchBuilder');

var _batchBuilder2 = _interopRequireDefault(_batchBuilder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var avl = (0, _batchBuilder2.default)(['AVLMusicHall', 'TheOrangePeelAsheville', 'greyeagleasheville', 'ashevilleodditorium']);

(0, _getKey2.default)('fb').then(function (key) {
  _fb.FB.api('', 'post', {
    version: 'v2.12',
    access_token: key,
    batch: avl
  }, function (response) {
    if (!response || response.error) {
      throw new Error(!response ? console.log('error occurred') : console.log(_fb.FacebookApiException, response.error));
    }
    response.map(function (i) {
      JSON.parse(i.body).data.map(function (j) {
        console.log(j.id);
      });
    });
  });
});