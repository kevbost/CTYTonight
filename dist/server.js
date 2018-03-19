// const express = require( 'express' )

// const app = express()
// const port = process.env.PORT || 5000

// app.get( '/api/hello', ( req, res ) => {
//   res.json({
//     express: 'Hello From ${WORKSPACE_ROOT}/server/server.js'
//   })
// })

// app.listen( port, () => { return console.log( `Listening on port ${port}` ) }) // eslint-disable-line

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var app = (0, _express2['default'])();
var port = process.env.PORT || 5000;

app.get('/api/hello', function (req, res) {
  res.json({
    express: 'Hello From ${WORKSPACE_ROOT}/server/server.js'
  });
});

app.listen(port, function () {
  return console.log('Listening on port ' + port); // eslint-disable-line
});