// const fs = require( 'fs' )
// const path = require( 'path' )
// const log = require( './logFile' )

import fs from 'fs'
import path from 'path'

const currentDir = path.resolve( process.cwd() )

const getKey = ( input ) => {
  return new Promise( ( resolve, reject ) => {
    fs.readFile( `${currentDir}/keys`, 'utf8', ( err, data ) => {
      if ( err ) {
        reject( err )

        return
      }
      const key = JSON.parse( data )[input]
      // log.KEYS[input] = key
      resolve( key )
    })
  // console.log(`LOG:\tRetrieved ${input} key`);
  }).catch( err => { return console.log( err ) })
}

export default getKey