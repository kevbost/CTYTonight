// const express = require( 'express' )

// const app = express()
// const port = process.env.PORT || 5000

// app.get( '/api/hello', ( req, res ) => {
//   res.json({
//     express: 'Hello From ${WORKSPACE_ROOT}/server/server.js'
//   })
// })

// app.listen( port, () => { return console.log( `Listening on port ${port}` ) }) // eslint-disable-line

import express from 'express'
import { FB, FacebookApiException } from 'fb'
import moment from 'moment'
import getKey from '../utils/getKey'
import batch from '../utils/batch'
import { sorter } from '../utils/sorter'

const app = express()
const port = process.env.PORT || 5000

const avl = batch( [
  'AVLMusicHall',
  'TheOrangePeelAsheville',
  'greyeagleasheville',
  'AshevilleCivicCenter',
  'HighlandBrewingCompany',
  'NewMtnAVL',
  'OneStopAVL',
  'ambrosewestavl',
  'ashevilleodditorium'
] )

const getFacebookData = ( batchArray ) => {
  return new Promise( ( resolve, reject ) => {
    let arr = []
    getKey( 'fb' ).then( key => {
      FB.api( '', 'post', {
        version: 'v2.12',
        access_token: key,
        batch: avl
      }, ( response ) => {
        if ( !response || response.error ) {
          throw new Error( !response ? console.log( 'error occurred' ) : console.log( FacebookApiException, response.error ) )
        }
        response.map( i => {
          JSON.parse( i.body ).data.map( j => {
            const event = j
            const date = {
              date: moment( j.start_time ).format( 'YYYY-MM-DD' )
            }
            const day = {
              day: moment( j.start_time ).format( 'dddd' )
            }
            arr.push( Object.assign( event, date, day ) )
          })
        })
        resolve( sorter( arr, 'date' ) )
      })
    })
  })
}

// getFacebookData( avl ).then( x => { return console.log( x ) })

app.get( '/api/hello', ( req, res ) => {
  res.json({
    express: 'Hello From ${WORKSPACE_ROOT}/server/server.js'
  })
})

app.get( '/api/hi', ( req, res ) => {

  getFacebookData( avl ).then( data => {
    res.json({
      data
    })
  })
})

app.listen( port, () => {
  return console.log( `Listening on port ${port}` )  // eslint-disable-line
})
