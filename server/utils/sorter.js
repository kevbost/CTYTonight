import moment from 'moment'

export const today = moment()
  .format( 'YYYY-MM-DD' )
export const tomorrow = moment()
  .add( 1, 'days' )
  .format( 'YYYY-MM-DD' )
export const nextWeek = moment()
  .add( 7, 'days' )
  .format( 'YYYY-MM-DD' )
export const nextWeekSixDay = moment()
  .add( 6, 'days' )
  .format( 'YYYY-MM-DD' )

export const sortObject = ( o ) => {
  return Object.keys( o ).sort()
    .reduce( ( r, k ) => { return ( r[k] = o[k], r ) }, {})
}

export const sorter = ( arr, property ) => {
  return arr.reduce( ( buffer, x ) => {
    if ( !buffer[x[property]] ) {
      buffer[x[property]] = []
    }
    buffer[x[property]].push( x )

    return sortObject( buffer )
  }, {})
}

