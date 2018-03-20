import { FB, FacebookApiException } from 'fb'
import getKey from './utils/getKey'
import batchBuilder from './utils/batchBuilder'

const avl = batchBuilder( [
  'AVLMusicHall',
  'TheOrangePeelAsheville',
  'greyeagleasheville',
  'ashevilleodditorium'
] )

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
        console.log( j.id )
      })
    })
  })
})
