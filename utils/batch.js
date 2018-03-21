import moment from 'moment'

const today = moment().format( 'YYYY-MM-DD' )
const today_plus_6 = moment()
  .add( 6, 'days' )
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

const batch = ( inputArray ) => {
  const arr = []
  inputArray.forEach( ( inp ) => {
    arr.push({
      method: 'get',
      relative_url: `/${inp}/events/?since=${today}&until=${today_plus_6}&time_filter=upcoming&fields=${params.join( ',' )}`
    })
  })

  return arr
}

export default batch
