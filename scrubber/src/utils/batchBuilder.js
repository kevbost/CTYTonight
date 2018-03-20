import moment from 'moment'

const todaysDate = moment().format( 'YYYY-MM-DD' )
const nextWeek = moment().add( 7,
  'days' )
  .format( 'YYYY-MM-DD' )

const params = [
  'description',
  'end_time',
  'name',
  'place',
  'start_time',
  'id',
  'attending_count',
  'interested_count',
  'category',
  'cover',
  'declined_count',
  'maybe_count',
  'timezone'
]

const batchBuilder = ( inputArray ) => {
  const arr = []
  inputArray.forEach( ( inp ) => {
    arr.push({
      method: 'get',
      relative_url: `/${inp}/events/?since=${todaysDate}&until=${nextWeek}&fields=${params.join( ',' )}`
    })
  })

  return arr
}

export default batchBuilder
