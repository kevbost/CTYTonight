const express = require( 'express' )

const app = express()
const port = process.env.PORT || 5000

app.get( '/api/hello', ( req, res ) => {
  res.json({
    express: 'Hello From ${WORKSPACE_ROOT}/server/server.js'
  })
})

app.listen( port, () => { return console.log( `Listening on port ${port}` ) }) // eslint-disable-line
