import * as types from './actionTypes'
import axios from 'axios'

/**
 * Set data based on api request
 */
export const setResponseData = ( data, cty, timespan ) => {
  return {
    type: types.SET_RESPONSE,
    data,
    cty,
    timespan
  }
}

/**
 * THUNK AXIOS DATA
 * Submit api request
 */
export const submitRequest = ( cty, timespan, presort = false ) => {
  return ( dispatch ) => {
    // dispatch( setCty( cty, timespan ) )

    return axios.get( `https://api.${cty}tonight.com/v1/${cty}/${timespan}${presort ? '/presort' : ''}` )
      .then( function( response ) {
        dispatch( setResponseData( response.data, cty, timespan ) )
      })
      .catch( function( error ){
        dispatch( setResponseData({
          'error': `${error}`
        }) )
      })
  }
}
